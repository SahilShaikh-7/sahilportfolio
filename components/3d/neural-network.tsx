'use client'

import React, { useRef, useMemo, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

function InteractiveNetwork() {
  const pointsRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const cursorRef = useRef<THREE.Mesh>(null!)
  
  const { mouse, viewport, camera } = useThree()
  const { resolvedTheme } = useTheme()

  const particleCount = 250
  const maxDistance = 3.5

  const mousePosition3D = useRef(new THREE.Vector3())
  const targetRotation = useRef({ x: 0, y: 0 })
  const isPointerDown = useRef(false)

  const [positions, lines, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const r = 8 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const isDark = resolvedTheme !== 'light'
      const color1 = isDark ? 0x06b6d4 : 0x3b82f6 // Cyan for dark, Blue for light
      const color2 = isDark ? 0xec4899 : 0x8b5cf6 // Pink for dark, Purple for light

      const mixedColor = new THREE.Color().lerpColors(
        new THREE.Color(color1),
        new THREE.Color(color2),
        Math.random()
      )
      
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    const maxLines = (particleCount * particleCount) + particleCount * 2
    const lines = new Float32Array(maxLines * 3 * 2)
    return [positions, lines, colors]
  }, [particleCount, resolvedTheme])

  const nodes = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      basePosition: new THREE.Vector3(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      )
    }))
  }, [positions, particleCount])

  useEffect(() => {
    const handleDown = () => (isPointerDown.current = true)
    const handleUp = () => (isPointerDown.current = false)
    window.addEventListener('pointerdown', handleDown)
    window.addEventListener('pointerup', handleUp)
    return () => {
      window.removeEventListener('pointerdown', handleDown)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current || !groupRef.current) return

    mousePosition3D.current.set(mouse.x, mouse.y, 0.5)
    mousePosition3D.current.unproject(camera)
    mousePosition3D.current.sub(camera.position).normalize()
    const distance = -camera.position.z / (mousePosition3D.current.z || 0.01)
    const cursorWorldPos = camera.position.clone().add(mousePosition3D.current.multiplyScalar(distance))
    
    const localMousePos = cursorWorldPos.clone()
    groupRef.current.worldToLocal(localMousePos)

    if (cursorRef.current) {
      cursorRef.current.position.copy(localMousePos)
      const scale = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.2 + (isPointerDown.current ? 0.5 : 0)
      cursorRef.current.scale.set(scale, scale, scale)
    }

    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array
    const linePositions = linesRef.current.geometry.attributes.position.array as Float32Array
    const lineColors = linesRef.current.geometry.attributes.color.array as Float32Array

    let lineIndex = 0

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const nodePos = new THREE.Vector3(posArray[i3], posArray[i3+1], posArray[i3+2])
      
      const distToMouse = nodePos.distanceTo(localMousePos)
      const force = new THREE.Vector3()

      if (isPointerDown.current) {
        if (distToMouse < 8) {
          force.subVectors(nodePos, localMousePos).normalize().multiplyScalar(0.15 / Math.max(distToMouse, 0.1))
        }
      } else {
        if (distToMouse < 4) {
          if (distToMouse > 1.5) {
            force.subVectors(localMousePos, nodePos).normalize().multiplyScalar(0.01)
          } else {
            force.subVectors(nodePos, localMousePos).normalize().multiplyScalar((1.5 - distToMouse) * 0.03)
          }

          const alpha = 1.0 - (distToMouse / 4)
          linePositions[lineIndex * 3] = posArray[i3]
          linePositions[lineIndex * 3 + 1] = posArray[i3 + 1]
          linePositions[lineIndex * 3 + 2] = posArray[i3 + 2]
          lineColors[lineIndex * 3] = colors[i3] * alpha
          lineColors[lineIndex * 3 + 1] = colors[i3+1] * alpha
          lineColors[lineIndex * 3 + 2] = colors[i3+2] * alpha
          lineIndex++
          
          linePositions[lineIndex * 3] = localMousePos.x
          linePositions[lineIndex * 3 + 1] = localMousePos.y
          linePositions[lineIndex * 3 + 2] = localMousePos.z
          lineColors[lineIndex * 3] = resolvedTheme === 'light' ? 0.2 : 0.0
          lineColors[lineIndex * 3 + 1] = resolvedTheme === 'light' ? 0.5 : 1.0
          lineColors[lineIndex * 3 + 2] = resolvedTheme === 'light' ? 1.0 : 1.0
          lineIndex++
        }
      }

      nodes[i].velocity.add(force)
      const returnForce = new THREE.Vector3().subVectors(nodes[i].basePosition, nodePos).multiplyScalar(0.005)
      nodes[i].velocity.add(returnForce)
      nodes[i].velocity.multiplyScalar(0.9)

      posArray[i3] += nodes[i].velocity.x
      posArray[i3 + 1] += nodes[i].velocity.y
      posArray[i3 + 2] += nodes[i].velocity.z

      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3
        const dx = posArray[i3] - posArray[j3]
        const dy = posArray[i3 + 1] - posArray[j3 + 1]
        const dz = posArray[i3 + 2] - posArray[j3 + 2]
        
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < maxDistance) {
          const alpha = 1.0 - (dist / maxDistance)
          
          linePositions[lineIndex * 3] = posArray[i3]
          linePositions[lineIndex * 3 + 1] = posArray[i3 + 1]
          linePositions[lineIndex * 3 + 2] = posArray[i3 + 2]
          lineColors[lineIndex * 3] = colors[i3] * alpha
          lineColors[lineIndex * 3 + 1] = colors[i3+1] * alpha
          lineColors[lineIndex * 3 + 2] = colors[i3+2] * alpha
          lineIndex++
          
          linePositions[lineIndex * 3] = posArray[j3]
          linePositions[lineIndex * 3 + 1] = posArray[j3 + 1]
          linePositions[lineIndex * 3 + 2] = posArray[j3 + 2]
          lineColors[lineIndex * 3] = colors[j3] * alpha
          lineColors[lineIndex * 3 + 1] = colors[j3+1] * alpha
          lineColors[lineIndex * 3 + 2] = colors[j3+2] * alpha
          lineIndex++
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.attributes.color.needsUpdate = true
    linesRef.current.geometry.setDrawRange(0, lineIndex)
    
    targetRotation.current.x = (mouse.y * Math.PI) / 6
    targetRotation.current.y = (mouse.x * Math.PI) / 6
    
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05
  })

  return (
    <group ref={groupRef}>
      <mesh ref={cursorRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial 
          color={resolvedTheme === 'light' ? '#3b82f6' : '#06b6d4'} 
          transparent 
          opacity={0.8} 
        />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.25} vertexColors transparent opacity={0.9} sizeAttenuation={true} blending={resolvedTheme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={lines.length / 3} array={new Float32Array(lines.length)} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={resolvedTheme === 'light' ? 0.4 : 0.6} blending={resolvedTheme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  )
}

export function NeuralNetworkScene() {
  const { resolvedTheme } = useTheme()
  const bgColor = resolvedTheme === 'light' ? '#f8fafc' : '#02040f'

  return (
    <div className="w-full h-full relative cursor-move" style={{ pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 2]} style={{ pointerEvents: 'auto' }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <InteractiveNetwork />
        </Suspense>
        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          autoRotate={true}
          autoRotateSpeed={1.0}
          maxDistance={30}
          minDistance={5}
          enableDamping={true}
          dampingFactor={0.05}
          makeDefault
        />
        <EffectComposer>
          {resolvedTheme === 'dark' ? (
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
          ) : (
            <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} intensity={0.5} />
          )}
        </EffectComposer>
      </Canvas>
    </div>
  )
}
