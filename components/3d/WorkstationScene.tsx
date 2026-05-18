// File: components/3d/WorkstationScene.tsx
'use client'

import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Edges } from '@react-three/drei'
import * as THREE from 'three'

const stickerColors = {
  U: '#f8fafc',
  D: '#fde047',
  F: '#06b6d4',
  B: '#7c3aed',
  L: '#f97316',
  R: '#ef4444',
  metal: '#7f8898',
  frame: '#cbd5e1',
}

const cubeletPositions = [-1, 0, 1]

function Cubelet({ position }: { position: [number, number, number] }) {
  const [x, y, z] = position
  const faceColors = [
    x === 1 ? stickerColors.R : stickerColors.metal,
    x === -1 ? stickerColors.L : stickerColors.metal,
    y === 1 ? stickerColors.U : stickerColors.metal,
    y === -1 ? stickerColors.D : stickerColors.metal,
    z === 1 ? stickerColors.F : stickerColors.metal,
    z === -1 ? stickerColors.B : stickerColors.metal,
  ]

  return (
    <mesh position={[x * 1.05, y * 1.05, z * 1.05]}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      {faceColors.map((color, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          color={color}
          metalness={0.88}
          roughness={0.18}
          emissive={color === stickerColors.metal ? '#000000' : color}
          emissiveIntensity={color === stickerColors.metal ? 0 : 0.04}
        />
      ))}
      <Edges threshold={15} color="#d1d5db" />
    </mesh>
  )
}

function RubiksCube() {
  const group = useRef<THREE.Group>(null!)
  const [rotation, setRotation] = useState([0, 0, 0])

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.x = rotation[0] + Math.sin(t * 0.18) * 0.05
    group.current.rotation.y = rotation[1] + Math.cos(t * 0.12) * 0.05
    group.current.rotation.z = rotation[2] + Math.sin(t * 0.08) * 0.02
  })

  const cubelets = useMemo(
    () =>
      cubeletPositions.flatMap((x) =>
        cubeletPositions.flatMap((y) =>
          cubeletPositions.map((z) => ({ position: [x, y, z] as [number, number, number] }))
        )
      ),
    []
  )

  const rotateAxis = (axis: 'x' | 'y' | 'z') => {
    setRotation((prev) => {
      const next = [...prev] as [number, number, number]
      if (axis === 'x') next[0] += Math.PI / 2
      if (axis === 'y') next[1] += Math.PI / 2
      if (axis === 'z') next[2] += Math.PI / 2
      return next
    })
  }

  return (
    <group ref={group}>
      {cubelets.map((item) => (
        <Cubelet key={item.position.join(',')} position={item.position} />
      ))}
      <mesh>
        <boxGeometry args={[3.5, 3.5, 3.5]} />
        <meshStandardMaterial color={stickerColors.frame} metalness={0.95} roughness={0.16} transparent opacity={0.12} />
        <Edges threshold={15} color="#94a3b8" />
      </mesh>
      <Html position={[0, -2.7, 0]} center zIndexRange={[10, 0]}>
        <div className="rounded-3xl bg-slate-950/70 border border-white/10 px-4 py-3 text-center text-sm text-slate-100 backdrop-blur-xl shadow-2xl">
          <p className="mb-2 font-semibold">Interactive cube — drag to rotate.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => rotateAxis('x')}
              className="rounded-full bg-slate-800/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-100 transition hover:bg-slate-700"
            >
              Rotate X
            </button>
            <button
              type="button"
              onClick={() => rotateAxis('y')}
              className="rounded-full bg-slate-800/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-100 transition hover:bg-slate-700"
            >
              Rotate Y
            </button>
            <button
              type="button"
              onClick={() => rotateAxis('z')}
              className="rounded-full bg-slate-800/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-100 transition hover:bg-slate-700"
            >
              Rotate Z
            </button>
          </div>
        </div>
      </Html>
    </group>
  )
}

export function WorkstationScene() {
  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      gl={{
        alpha: false,
        antialias: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: false,
      }}
      camera={{ position: [4, 4, 6], fov: 45 }}
      onContextLost={(event) => event.preventDefault()}
      onContextRestored={() => console.log('WebGL context restored')}
      onCreated={({ gl }) => {
        gl.setClearColor('#06070f', 1)
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.SRGBColorSpace
      }}
    >
      <color attach="background" args={['#06070f']} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 7, 4]} intensity={1.3} color="#e2e8f0" />
      <pointLight position={[-4, 3, -2]} intensity={0.9} color="#93c5fd" />
      <pointLight position={[3, 1, -5]} intensity={0.9} color="#38bdf8" />

      <Suspense fallback={null}>
        <RubiksCube />
      </Suspense>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.25, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#090b16" metalness={0.3} roughness={0.75} />
      </mesh>

      <OrbitControls enablePan={false} enableZoom={true} autoRotate={false} rotateSpeed={0.95} />
    </Canvas>
  )
}
