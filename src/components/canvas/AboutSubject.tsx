'use client'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Icosahedron, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { damp } from 'maath/easing'

export default function AboutSubject(props: any) {
    const mesh = useRef<THREE.Mesh>(null!)
    const innerMesh = useRef<THREE.Mesh>(null!)
    const materialRef = useRef<THREE.MeshStandardMaterial>(null!)
    const innerMaterialRef = useRef<THREE.MeshStandardMaterial>(null!)

    const { viewport } = useThree()
    const scroll = useScroll()
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        // About section is roughly from scroll 0.2 to 0.4
        const r1 = scroll.range(0.15, 0.25)

        // Rotation
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2
            mesh.current.rotation.y += delta * 0.2
        }

        const targetScale = r1 * (hovered ? 1.2 : 1)
        const targetOpacity = r1 * 0.3
        const innerOpacity = r1 * 0.8

        // Animate Outer
        if (mesh.current) {
            damp(mesh.current.scale, 'x', targetScale, 0.2, delta)
            damp(mesh.current.scale, 'y', targetScale, 0.2, delta)
            damp(mesh.current.scale, 'z', targetScale, 0.2, delta)

            // Responsive X position
            // Mobile: -0.5 (center-ish?), Desktop: -3 (left)
            const mobile = viewport.width < 5
            const targetX = mobile ? -viewport.width / 3 : -3.5
            const targetY = mobile ? 1 : -0.5 // Move up on mobile to not overlap text?

            damp(mesh.current.position, 'x', targetX, 0.2, delta)
            damp(mesh.current.position, 'y', targetY, 0.2, delta)
        }

        if (materialRef.current) {
            materialRef.current.opacity = targetOpacity
        }

        // Animate Inner
        if (innerMesh.current) {
            innerMesh.current.rotation.x -= delta * 0.1
            innerMesh.current.rotation.y -= delta * 0.1
            const innerScale = hovered ? 0.9 : 0.5
            damp(innerMesh.current.scale, 'x', innerScale, 0.2, delta)
            damp(innerMesh.current.scale, 'y', innerScale, 0.2, delta)
            damp(innerMesh.current.scale, 'z', innerScale, 0.2, delta)
        }

        if (innerMaterialRef.current) {
            innerMaterialRef.current.opacity = innerOpacity
        }
    })

    return (
        <group {...props}>
            <Icosahedron args={[1, 0]} ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <meshStandardMaterial
                    ref={materialRef}
                    color="#00f0ff"
                    wireframe
                    transparent
                    opacity={0}
                />

                {/* Inner solid core as child of outer? No, separate to rotate opposite */}
            </Icosahedron>

            <Icosahedron args={[0.8, 0]} ref={innerMesh} position={[0, 0, 0]}>
                <meshStandardMaterial
                    ref={innerMaterialRef}
                    color="black"
                    emissive="#00f0ff"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0}
                />
            </Icosahedron>
        </group>
    )
}
