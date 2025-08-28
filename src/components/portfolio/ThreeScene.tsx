import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Treasure Orb Component
const TreasureOrb = ({ position, scrollProgress, isActive }: { 
  position: [number, number, number], 
  scrollProgress: number,
  isActive: boolean 
}) => {
  const orbRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useEffect(() => {
    // Create particle burst for treasure found effect
    if (isActive && particlesRef.current) {
      const particleCount = 50;
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = 1 + Math.random() * 2;
        
        positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
        positions[i * 3 + 1] = Math.cos(phi) * radius;
        positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesRef.current.geometry = geometry;
    }
  }, [isActive]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (orbRef.current) {
      // Treasure orb rotation and pulse
      orbRef.current.rotation.y = time * 0.5;
      
      if (isActive) {
        // Intense pulsing when treasure is found
        const pulse = Math.sin(time * 4) * 0.3 + 1.2;
        orbRef.current.scale.setScalar(pulse);
      } else {
        // Gentle pulse when approaching
        const gentlePulse = Math.sin(time * 2) * 0.1 + 1;
        orbRef.current.scale.setScalar(gentlePulse);
      }
    }
    
    // Animate treasure particles
    if (particlesRef.current && isActive) {
      particlesRef.current.rotation.y += 0.02;
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.size = 0.15 + Math.sin(time * 3) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Main Treasure Orb */}
      <group ref={orbRef}>
        {/* Core Orb */}
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={isActive ? 1 : 0.9}
          />
        </mesh>
        
        {/* Inner Glow */}
        <mesh>
          <sphereGeometry args={[1.0, 32, 32]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={isActive ? 0.6 : 0.3}
          />
        </mesh>
        
        {/* Outer Glow */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={isActive ? 0.4 : 0.1}
          />
        </mesh>
      </group>
      
      {/* Treasure Found Particle Burst */}
      {isActive && (
        <points ref={particlesRef}>
          <pointsMaterial 
            color="#3B82F6"
            size={0.15}
            transparent
            opacity={0.8}
          />
        </points>
      )}
    </group>
  );
};

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
  const markersRef = useRef<THREE.Group[]>([]);
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

    // Optimized particles along the path
    const particleCount = 50;
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

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Optimized camera updates - less frequent updates
    if (Math.floor(time * 30) !== Math.floor((time - 0.033) * 30)) {
      const targetIndex = Math.floor(scrollProgress * (pathPoints.length - 1));
      const progress = (scrollProgress * (pathPoints.length - 1)) - targetIndex;
      
      if (targetIndex < pathPoints.length - 1) {
        const currentPoint = pathPoints[targetIndex];
        const nextPoint = pathPoints[targetIndex + 1];
        
        // Smoother camera interpolation
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, 
          THREE.MathUtils.lerp(currentPoint.x, nextPoint.x, progress), 0.1);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y,
          THREE.MathUtils.lerp(currentPoint.y + 3, nextPoint.y + 3, progress), 0.1);
        camera.position.z = THREE.MathUtils.lerp(camera.position.z,
          THREE.MathUtils.lerp(currentPoint.z + 5, nextPoint.z + 5, progress), 0.1);
        
        camera.lookAt(nextPoint.x, nextPoint.y, nextPoint.z);
      }
    }

    // Reduced particle animation frequency
    if (particlesRef.current && Math.floor(time * 10) % 2 === 0) {
      particlesRef.current.rotation.y += 0.002;
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.opacity = Math.min(0.4, scrollProgress * 1.5);
    }
    
    // Optimized marker animations
    const revealProgress = scrollProgress * pathPoints.length;
    markersRef.current.forEach((marker, index) => {
      if (marker && Math.floor(time * 20) % 3 === 0) {
        const isRevealed = revealProgress > index;
        const isActive = Math.floor(revealProgress) === index;
        
        const targetScale = isActive ? Math.sin(time * 2) * 0.1 + 1.1 : (isRevealed ? 1 : 0.3);
        marker.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        
        marker.children.forEach(child => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
            child.material.opacity = THREE.MathUtils.lerp(
              child.material.opacity, 
              isRevealed ? (isActive ? 1 : 0.6) : 0.2, 
              0.1
            );
          }
        });
      }
    });
  });

  return (
    <>
      {/* Progressive Path Line */}
      <Line
        ref={lineRef}
        points={pathPoints.map((p, index) => {
          const revealProgress = scrollProgress * pathPoints.length;
          const isRevealed = revealProgress > index;
          return isRevealed ? [p.x, p.y, p.z] : [p.x, p.y, p.z];
        })}
        color="#3B82F6"
        lineWidth={3}
        transparent
        opacity={Math.min(0.8, scrollProgress * 2)}
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
      
      {/* Path Checkpoints - Treasure Markers */}
      {pathPoints.map((point, index) => (
        <group 
          key={index} 
          position={[point.x, point.y, point.z]}
          ref={(ref) => {
            if (ref) markersRef.current[index] = ref;
          }}
        >
          {/* Main Marker */}
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.9}
            />
          </mesh>
          
          {/* Outer Glow Ring */}
          <mesh>
            <torusGeometry args={[0.5, 0.05, 8, 16]} />
            <meshBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.4}
            />
          </mesh>
          
          {/* Inner Glow */}
          <mesh>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.1}
            />
          </mesh>
          
          {/* Floating Indicator */}
          <group position={[0, 0.8, 0]}>
            <mesh>
              <coneGeometry args={[0.1, 0.3, 8]} />
              <meshBasicMaterial 
                color="#3B82F6" 
                transparent 
                opacity={0.7}
              />
            </mesh>
          </group>
        </group>
      ))}

      {/* Final Treasure Orb - Enhanced */}
      <TreasureOrb 
        position={[0, -10, -35]} 
        scrollProgress={scrollProgress}
        isActive={scrollProgress > 0.9}
      />
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