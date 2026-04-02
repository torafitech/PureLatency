// components/hero/EarthWithNetwork3D.tsx
'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, Color } from 'three'
import { useRef } from 'react'
import * as THREE from 'three'

function Earth() {
  const ref = useRef<THREE.Mesh>(null!)
  const texture = useLoader(TextureLoader, '/images/earth.png')

  useFrame(() => {
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[1.15, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.85}
        metalness={0.1}
      />
    </mesh>
  )
}

function NetworkWaves() {
  const group = useRef<THREE.Group>(null!)

  useFrame(() => {
    group.current.rotation.y += 0.001
  })

  return (
    <group ref={group}>
      {[1.35, 1.55].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.01, 24, 160]} />
          <meshStandardMaterial
            color={new Color('#000000')}
            emissive={new Color('#1f2937')}
            emissiveIntensity={0.35}
            roughness={0.3}
            metalness={0.6}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function EarthWithGlowNetwork3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.8, 4.2], fov: 45 }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[6, 6, 6]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-4, -3, 3]} intensity={0.45} />

      <group position={[0, -0.2, 0]}>
        <Earth />
        {/* <NetworkWaves /> */}
      </group>
    </Canvas>
  )
}