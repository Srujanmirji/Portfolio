'use client'

import { Image, Text, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { easing } from 'maath'
import * as THREE from 'three'

export default function ProjectCard({ project, scale = 1, ...props }: any) {
    const ref = useRef<THREE.Group>(null!)
    const [hovered, setHover] = useState(false)

    useCursor(hovered)

    useFrame((state, delta) => {
        // Smooth scaling on hover
        easing.damp3(ref.current.scale, hovered ? scale * 1.15 : scale, 0.1, delta)

        // Slight rotation on hover
        easing.dampE(
            ref.current.rotation,
            hovered ? [0, -0.1, 0] : [0, 0, 0],
            0.1,
            delta
        )
    })

    return (
        <group ref={ref} {...props}>
            <Image
                url={project.image}
                transparent
                side={THREE.DoubleSide}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={() => window.open(project.link, '_blank')}
                scale={[4, 2.5]} // 16:10 aspect ratio approx
            >
                <planeGeometry />
            </Image>

            <Text
                position={[0, -1.5, 0.1]}
                fontSize={0.25}
                color="white"
                anchorX="center"
                anchorY="top"
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            >
                {project.title.toUpperCase()}
            </Text>

            <Text
                position={[0, -1.8, 0.1]}
                fontSize={0.15}
                color={project.color}
                anchorX="center"
                anchorY="top"
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            >
                {project.description}
            </Text>
        </group>
    )
}
