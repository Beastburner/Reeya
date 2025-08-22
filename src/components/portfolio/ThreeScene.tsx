import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

interface PathPoint {
  x: number;
  y: number;
  z: number;
}

interface ThreeSceneProps {
  scrollProgress: number;
}

const TreasurePath = ({ scrollProgress }: { scrollProgress: number }) => {
  const lineRef = useRef<any>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  // Define the treasure map path points
  const pathPoints: PathPoint[] = [
    { x: 0, y: 5, z: 0 },      // Hero - Start
    { x: -3, y: 2, z: -5 },    // About
    { x: 2, y: 0, z: -10 },    // Skills  
    { x: -1, y: -2, z: -15 },  // Projects
    { x: 4, y: -4, z: -20 },   // Experience
    { x: -2, y: -6, z: -25 },  // Certificates
    { x: 1, y: -8, z: -30 },   // Languages
    { x: 0, y: -10, z: -35 },  // Contact - End
  ];

  useEffect(() => {
    // Create path geometry
    const curve = new THREE.CatmullRomCurve3(
      pathPoints.map(p => new THREE.Vector3(p.x, p.y, p.z))
    );
    
    const points = curve.getPoints(200);

    // Create particles along the path
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const point = curve.getPoint(i / particleCount);
      positions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5; 
      positions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    if (particlesRef.current) {
      particlesRef.current.geometry = particleGeometry;
    }
  }, []);

  useFrame(() => {
    // Update camera position based on scroll
    const targetIndex = Math.floor(scrollProgress * (pathPoints.length - 1));
    const progress = (scrollProgress * (pathPoints.length - 1)) - targetIndex;
    
    if (targetIndex < pathPoints.length - 1) {
      const currentPoint = pathPoints[targetIndex];
      const nextPoint = pathPoints[targetIndex + 1];
      
      // Interpolate camera position
      camera.position.x = THREE.MathUtils.lerp(currentPoint.x, nextPoint.x, progress);
      camera.position.y = THREE.MathUtils.lerp(currentPoint.y + 3, nextPoint.y + 3, progress);
      camera.position.z = THREE.MathUtils.lerp(currentPoint.z + 5, nextPoint.z + 5, progress);
      
      // Look at the next point on the path
      camera.lookAt(nextPoint.x, nextPoint.y, nextPoint.z);
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      {/* Main Path Line */}
      <Line
        ref={lineRef}
        points={pathPoints.map(p => [p.x, p.y, p.z])}
        color="#3B82F6"
        lineWidth={3}
        transparent
        opacity={0.8}
      />
      
      {/* Glowing Particles */}
      <points ref={particlesRef}>
        <pointsMaterial 
          color="#3B82F6"
          size={0.1}
          transparent
          opacity={0.6}
        />
      </points>
      
      {/* Path Checkpoints */}
      {pathPoints.map((point, index) => (
        <group key={index} position={[point.x, point.y, point.z]}>
          <mesh>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.8}
            />
          </mesh>
          {/* Glow effect */}
          <mesh>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* Final Treasure Orb */}
      <group position={[0, -10, -35]}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={0.9}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={0.3}
          />
        </mesh>
      </group>
    </>
  );
};

const ThreeScene = ({ scrollProgress }: ThreeSceneProps) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 8, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <TreasurePath scrollProgress={scrollProgress} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;