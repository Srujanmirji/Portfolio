'use client'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { damp } from 'maath/easing'

export default function HeroBlob(props: any) {
    const mesh = useRef<THREE.Mesh>(null!)
    const wireMesh = useRef<THREE.Mesh>(null!)
    const materialRef = useRef<any>(null!)
    const { viewport, mouse } = useThree()
    const scroll = useScroll()
    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) => {
        // Scroll offsets
        // range(0, 1/3) means from scroll 0 to 33% of total height
        const r1 = scroll.range(0, 1 / 3)

        // Parallax & Rotation target
        const x = (mouse.x * viewport.width) / 2
        const y = (mouse.y * viewport.height) / 2

        // Main Blob
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.1
            mesh.current.rotation.y += delta * 0.15

            // Move left on scroll
            // We push it out of view or to the side
            const pX = (x * 0.2) - (viewport.width * 0.25 * r1)
            const pY = (y * 0.2) + 0.5 // Shift up by 0.5

            if (!isNaN(pX) && !isNaN(pY)) {
                mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, pX, 0.1)
                mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, pY, 0.1)
            }
        }

        // Wireframe Shell
        if (wireMesh.current) {
            wireMesh.current.rotation.x -= delta * 0.05
            wireMesh.current.rotation.y -= delta * 0.05

            // Safe interpolation
            const currentY = wireMesh.current.position.y
            const targetY = y * 0.15

            if (!isNaN(targetY)) {
                wireMesh.current.position.y = THREE.MathUtils.lerp(currentY, targetY, 0.1)
            }
        }

        // Animate Material
        if (materialRef.current) {
            damp(materialRef.current, 'distort', hovered ? 0.6 : 0.3, 0.25, delta)
            damp(materialRef.current, 'speed', hovered ? 4 : 2, 0.25, delta)
        }
    })

    return (
        <group {...props}>
            {/* Inner Distorted Core */}
            <Sphere args={[1, 64, 64]} ref={mesh}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#000000"
                    emissive="#00f0ff"
                    emissiveIntensity={0.8}
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.9}
                />
            </Sphere>

            {/* Outer Wireframe Shell */}
            <Sphere args={[2, 32, 32]} ref={wireMesh}>
                <meshBasicMaterial
                    color="#333"
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </Sphere>
        </group>
    )
}
