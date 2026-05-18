'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function RawMonitorFace({ width, height, color, emissive }: { width: number; height: number; color: string; emissive: string }) {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, height, 0.12]} />
        <meshPhysicalMaterial color={color} metalness={0.15} roughness={0.16} clearcoat={0.9} clearcoatRoughness={0.05} />
      </mesh>
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[width * 0.94, height * 0.82]} />
        <meshStandardMaterial color="#05121d" emissive={emissive} emissiveIntensity={0.2} transparent opacity={0.92} roughness={0.08} />
      </mesh>
    </group>
  )
}

function MonitorContent({ width, height, position }: { width: number; height: number; position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0.055]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#07121c" emissive="#0f172a" emissiveIntensity={0.15} transparent opacity={0.97} />
      </mesh>
      {[...Array(10)].map((_, index) => (
        <mesh key={index} position={[-width * 0.44 + index * (width * 0.1), height * 0.28, 0.056]}>
          <boxGeometry args={[width * 0.085, height * 0.03, 0.01]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#84c8ff' : '#9f7aea'} emissive={index % 2 === 0 ? '#4f8dff' : '#a78bfa'} emissiveIntensity={0.22} transparent opacity={0.92} />
        </mesh>
      ))}
      {[...Array(7)].map((_, index) => (
        <mesh key={`line-${index}`} position={[-width * 0.42 + index * (width * 0.12), -height * 0.1, 0.056]}>
          <boxGeometry args={[width * 0.095, height * 0.02, 0.01]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={0.14} transparent opacity={0.9} />
        </mesh>
      ))}
      <mesh position={[0, -height * 0.35, 0.056]}>
        <boxGeometry args={[width * 0.5, height * 0.1, 0.01]} />
        <meshStandardMaterial color="#94a3b8" transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

function CurvedMonitor({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.96, -0.06]}>
        <boxGeometry args={[3.6, 1.6, 0.18]} />
        <meshPhysicalMaterial color="#111827" metalness={0.35} roughness={0.15} clearcoat={1} clearcoatRoughness={0.05} />
      </mesh>
      <mesh position={[0, 0.94, 0.04]} rotation={[0, 0, 0]}>
        <planeGeometry args={[3.4, 1.35]} />
        <meshStandardMaterial color="#02101a" emissive="#3168ff" emissiveIntensity={0.24} transparent opacity={0.94} />
      </mesh>
      <mesh position={[0, 0.94, 0.055]}>
        <planeGeometry args={[3.28, 1.25]} />
        <meshStandardMaterial color="#05131d" emissive="#1b7aff" emissiveIntensity={0.22} transparent opacity={0.96} />
      </mesh>
      <mesh position={[0, 0.7, 0.055]}> <boxGeometry args={[0.7, 0.08, 0.08]} /> <meshStandardMaterial color="#0f172a" /> </mesh>
      <mesh position={[0, 0.38, 0.04]}> <boxGeometry args={[0.3, 0.32, 0.08]} /> <meshStandardMaterial color="#111827" /> </mesh>
      <mesh position={[0, -0.02, 0.08]} rotation={[0, 0, 0]}> <planeGeometry args={[3.3, 1.25]} /> <meshStandardMaterial color="#08101b" emissive="#075985" emissiveIntensity={0.08} transparent opacity={0.5} /> </mesh>
      <MonitorContent width={3.26} height={1.15} position={[0, 0.95, 0.056]} />
      <mesh position={[0, 0.53, -0.08]}>
        <cylinderGeometry args={[0.08, 0.08, 0.62, 48]} />
        <meshPhysicalMaterial color="#111827" metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.02, -0.08]}> <boxGeometry args={[0.46, 0.04, 0.36]} /> <meshPhysicalMaterial color="#111827" metalness={0.35} roughness={0.2} /> </mesh>
    </group>
  )
}

function VerticalMonitor({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.8, 0]}> <boxGeometry args={[0.7, 1.3, 0.14]} /> <meshPhysicalMaterial color="#111827" metalness={0.35} roughness={0.15} /> </mesh>
      <mesh position={[0, 0.8, 0.075]}> <planeGeometry args={[0.58, 1.1]} /> <meshStandardMaterial color="#06131f" emissive="#7dd3fc" emissiveIntensity={0.2} transparent opacity={0.93} /> </mesh>
      <mesh position={[0, 0.35, -0.08]}> <cylinderGeometry args={[0.06, 0.06, 0.5, 40]} /> <meshStandardMaterial color="#111827" metalness={0.4} roughness={0.2} /> </mesh>
      <mesh position={[0, 0.05, -0.08]}> <boxGeometry args={[0.24, 0.04, 0.22]} /> <meshStandardMaterial color="#111827" /> </mesh>
    </group>
  )
}

function Keyboard() {
  return (
    <group position={[-0.12, 0.06, 0.56]} rotation={[0, 0.08, 0]}>
      <mesh position={[0, 0, 0]}> <boxGeometry args={[1.95, 0.06, 0.48]} /> <meshPhysicalMaterial color="#111827" metalness={0.25} roughness={0.2} /> </mesh>
      {[...Array(5)].map((_, row) =>
        [...Array(15)].map((_, col) => (
          <mesh key={`key-${row}-${col}`} position={[-0.9 + col * 0.13, 0.035, -0.17 + row * 0.095]}> 
            <boxGeometry args={[0.11, 0.02, 0.08]} />
            <meshStandardMaterial color="#dbeafe" metalness={0.06} roughness={0.15} />
          </mesh>
        ))
      )}
      <mesh position={[0.72, 0.035, 0.16]}> <boxGeometry args={[0.36, 0.02, 0.18]} /> <meshStandardMaterial color="#9ca3af" transparent opacity={0.9} /> </mesh>
    </group>
  )
}

function Mouse() {
  return (
    <group position={[1.45, 0.06, 0.84]} rotation={[0, -0.28, 0]}>
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[0.2, 0.05, 0.36]} />
        <meshStandardMaterial color="#111827" roughness={0.2} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.05, 0.02]}>
        <boxGeometry args={[0.12, 0.01, 0.24]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} />
      </mesh>
    </group>
  )
}

function PCChassis() {
  return (
    <group position={[3.1, -0.46, -0.62]} rotation={[0, 0.14, 0]}> 
      <mesh position={[0, 0.7, 0]}> <boxGeometry args={[0.7, 1.7, 0.8]} /> <meshPhysicalMaterial color="#0b1120" metalness={0.35} roughness={0.18} clearcoat={0.5} /> </mesh>
      <mesh position={[-0.2, 0.7, 0.42]}> <boxGeometry args={[0.34, 1.54, 0.02]} /> <meshStandardMaterial color="#0f172a" transparent opacity={0.24} roughness={0.2} /> </mesh>
      <mesh position={[0.18, 0.22, 0.42]}> <boxGeometry args={[0.16, 0.16, 0.02]} /> <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} transparent opacity={0.6} /> </mesh>
      <mesh position={[0.2, 1.3, 0.43]}> <boxGeometry args={[0.08, 0.14, 0.02]} /> <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.45} transparent opacity={0.6} /> </mesh>
      <mesh position={[0, 0.08, 0.35]}> <boxGeometry args={[0.52, 0.04, 0.52]} /> <meshStandardMaterial color="#111827" roughness={0.18} /> </mesh>
    </group>
  )
}

function DeskLaminate() {
  return (
    <group position={[0, -0.36, 0]}> 
      <mesh position={[0, -0.02, 0]}> <boxGeometry args={[7.8, 0.08, 3.2]} /> <meshPhysicalMaterial color="#0b1120" metalness={0.15} roughness={0.24} clearcoat={0.85} clearcoatRoughness={0.05} /> </mesh>
      <mesh position={[2.1, 0.02, 1.55]} rotation={[0, 0.05, 0]}> <boxGeometry args={[0.5, 0.2, 0.28]} /> <meshStandardMaterial color="#111827" metalness={0.25} roughness={0.2} /> </mesh>
    </group>
  )
}

function HologramPanel({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  return (
    <group position={position} rotation={rotation}> 
      <mesh>
        <planeGeometry args={[1.3, 0.8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.18} transparent opacity={0.22} />
      </mesh>
      {[...Array(5)].map((_, index) => (
        <mesh key={`holo-line-${index}`} position={[-0.56 + index * 0.28, 0.16, 0.01]}>
          <boxGeometry args={[0.24, 0.04, 0.01]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.18} transparent opacity={0.25} />
        </mesh>
      ))}
      <mesh position={[-0.38, -0.12, 0.01]}> <boxGeometry args={[0.5, 0.2, 0.01]} /> <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.14} transparent opacity={0.22} /> </mesh>
    </group>
  )
}

function StudioRig() {
  const groupRef = useRef<THREE.Group>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePointer = (event: MouseEvent) => {
      setPointer({ x: (event.clientX / window.innerWidth) * 2 - 1, y: -(event.clientY / window.innerHeight) * 2 + 1 })
    }
    window.addEventListener('mousemove', updatePointer)
    return () => window.removeEventListener('mousemove', updatePointer)
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.08, 0.04)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.03, 0.04)
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -0.12 + Math.sin(clock.elapsedTime * 0.37) * 0.015, 0.05)
  })

  return (
    <group ref={groupRef} position={[0, -0.9, 0]}>
      <DeskLaminate />
      <CurvedMonitor position={[0, 0.44, -0.57]} rotation={[0.08, 0, 0]} />
      <VerticalMonitor position={[2.4, 0.18, -0.2]} rotation={[0.06, -0.25, 0]} />
      <Keyboard />
      <Mouse />
      <PCChassis />
      <HologramPanel position={[-2.4, 0.95, 0.9]} rotation={[0, -0.25, 0]} color="#38bdf8" />
      <HologramPanel position={[1.8, 1.05, -1.35]} rotation={[0.1, 0.35, 0]} color="#a855f7" />
      <HologramPanel position={[0.5, 1.35, 1.5]} rotation={[0.05, 0.1, 0]} color="#f472b6" />
      <Sparkles count={20} scale={5} speed={0.2} size={0.08} color="#93c5fd" />
    </group>
  )
}

export function DeveloperBrainCanvas() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2.2, 8], fov: 32 }} className="w-full h-full">
      <fog attach="fog" args={[ '#020617', 4, 16 ]} />
      <color attach="background" args={[ '#070b17' ]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} color="#7dd3fc" castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <directionalLight position={[-4, 3, -3]} intensity={0.75} color="#c084fc" />
      <pointLight position={[0, 2.2, 1.2]} intensity={0.35} color="#ffffff" />
      <Environment preset="city" />
      <StudioRig />
      <ContactShadows position={[0, -0.5, 0]} opacity={0.65} width={8} height={8} blur={1.5} far={1.8} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.16} rotateSpeed={0.25} />
    </Canvas>
  )
}
