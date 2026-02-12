'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function HeroObject(props: any) {
    const mesh = useRef<Mesh>(null!)

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2
        mesh.current.rotation.y += delta * 0.3
    })

    return (
        <mesh ref={mesh} {...props}>
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#222" wireframe emissive="#00f0ff" emissiveIntensity={0.5} />
        </mesh>
    )
}
