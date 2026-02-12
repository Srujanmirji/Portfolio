'use client'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Html } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'

export default function ContactBall() {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const { viewport } = useThree()

    useFrame((state, delta) => {
        // Rotate constantly
        mesh.current.rotation.x += delta * 0.5
        mesh.current.rotation.y += delta * 0.6

        // Pulse on hover
        const scale = hovered ? 2.5 : 2
        easing.damp(mesh.current.scale, 'x', scale, 0.2, delta)
        easing.damp(mesh.current.scale, 'y', scale, 0.2, delta)
        easing.damp(mesh.current.scale, 'z', scale, 0.2, delta)
    })

    return (
        <group position={[0, -4, 0]}>
            {/* Positioned lower so camera can scroll down to it */}
            <Sphere
                args={[1, 64, 64]}
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={() => {
                    // Simple interaction: maybe copy email or just visual feedback?
                    alert("Thanks for visiting!")
                }}
            >
                <MeshDistortMaterial
                    color="#000000"
                    emissive="#ff00aa"
                    emissiveIntensity={hovered ? 2 : 1}
                    distort={0.5}
                    speed={hovered ? 4 : 2}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>

            {/* Add a light that follows it to make it pop */}
            <pointLight position={[0, -4, 2]} intensity={2} color="#ff00aa" distance={5} />
        </group>
    )
}
