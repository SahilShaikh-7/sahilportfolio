'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function FuturisticWorkstation() {
  const groupRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mousePosition.y * 0.15
      groupRef.current.rotation.y = mousePosition.x * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* RGB Desk Base */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[3.5, 0.3, 2]} />
        <meshPhongMaterial color="#1a1a2e" emissive="#0891b2" emissiveIntensity={0.3} />
      </mesh>

      {/* Left Holographic Monitor */}
      <group position={[-1.5, 0.2, 0.5]}>
        {/* Monitor Frame */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1.2, 0.08]} />
          <meshPhongMaterial color="#0f0f1e" emissive="#7c3aed" emissiveIntensity={0.4} />
        </mesh>
        {/* Screen Glow */}
        <mesh position={[0, 0.5, 0.08]}>
          <planeGeometry args={[0.9, 1.1]} />
          <meshPhongMaterial 
            color="#06b6d4" 
            emissive="#0891b2" 
            emissiveIntensity={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Center Holographic Monitor */}
      <group position={[0, 0.3, 1]}>
        {/* Monitor Frame */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[1.2, 1.4, 0.1]} />
          <meshPhongMaterial color="#0f0f1e" emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
        {/* Screen Glow */}
        <mesh position={[0, 0.6, 0.1]}>
          <planeGeometry args={[1.1, 1.3]} />
          <meshPhongMaterial 
            color="#06b6d4" 
            emissive="#0891b2" 
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      {/* Right Holographic Monitor */}
      <group position={[1.5, 0.2, 0.5]}>
        {/* Monitor Frame */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1.2, 0.08]} />
          <meshPhongMaterial color="#0f0f1e" emissive="#7c3aed" emissiveIntensity={0.4} />
        </mesh>
        {/* Screen Glow */}
        <mesh position={[0, 0.5, 0.08]}>
          <planeGeometry args={[0.9, 1.1]} />
          <meshPhongMaterial 
            color="#06b6d4" 
            emissive="#0891b2" 
            emissiveIntensity={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Glowing Keyboard */}
      <mesh position={[0, -0.95, -0.2]}>
        <boxGeometry args={[2.2, 0.15, 0.6]} />
        <meshPhongMaterial 
          color="#1a1a2e" 
          emissive="#ec4899" 
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Floating UI Panel - Left */}
      <group position={[-2.2, 0.5, 0]}>
        <mesh>
          <planeGeometry args={[0.6, 0.8]} />
          <meshPhongMaterial 
            color="#7c3aed" 
            emissive="#7c3aed" 
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Floating UI Panel - Right */}
      <group position={[2.2, 0.5, 0]}>
        <mesh>
          <planeGeometry args={[0.6, 0.8]} />
          <meshPhongMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Floating Code Orbs */}
      <mesh position={[-1, 1.5, 0.8]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshPhongMaterial 
          color="#ec4899" 
          emissive="#ec4899" 
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[1.2, 1.6, -0.5]}>
        <octahedronGeometry args={[0.2, 2]} />
        <meshPhongMaterial 
          color="#06b6d4" 
          emissive="#06b6d4" 
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[0.3, 1.8, 1]}>
        <tetrahedronGeometry args={[0.22]} />
        <meshPhongMaterial 
          color="#7c3aed" 
          emissive="#7c3aed" 
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

function RotatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshPhongMaterial
        color="#7c3aed"
        emissive="#5b21b6"
        wireframe
        opacity={0.3}
        transparent
      />
    </mesh>
  )
}

function FloatingOrb({ position, color, emissive }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.01
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.015
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.25, 16, 16]} />
      <meshPhongMaterial color={color} emissive={emissive} />
    </mesh>
  )
}

export function FloatingDeveloper() {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#ec4899" />

      <FuturisticWorkstation />
      <RotatingGeometry />
      
      {/* Floating decorative orbs */}
      <FloatingOrb position={[-2, 1.5, 1]} color="#06b6d4" emissive="#0891b2" />
      <FloatingOrb position={[2.5, -0.5, 0.5]} color="#ec4899" emissive="#be185d" />
      <FloatingOrb position={[0, 2.5, -1]} color="#7c3aed" emissive="#5b21b6" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={3} />
    </Canvas>
  )
}
