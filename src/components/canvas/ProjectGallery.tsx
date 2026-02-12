'use client'

import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants/projects'
import { easing } from 'maath'

export default function ProjectGallery() {
    const { width, height } = useThree((state) => state.viewport)
    const group = useRef<THREE.Group>(null!)
    const scroll = useScroll()

    useFrame((state, delta) => {
        // Range for gallery section: from 2/4 to 1/4 duration? 
        // Let's say gallery takes up the 3rd page out of 4.
        const r = scroll.range(2 / 4, 1 / 4)

        // Horizontal scroll calculation
        const isMobile = width < 5
        const spacing = isMobile ? 3.5 : 5.5
        const totalWidth = (projects.length - 1) * spacing

        // Move the group left based on scroll
        const x = -r * totalWidth

        // Smooth interpolation
        easing.damp3(group.current.position, [x, -3.5, 0], 0.2, delta)
    })

    const isMobile = width < 5
    const spacing = isMobile ? 3.5 : 5.5

    return (
        <group ref={group} position={[0, -3.5, 0]}>
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    project={project}
                    position={[i * spacing, 0, 0]}
                    scale={isMobile ? 0.8 : 1}
                />
            ))}
        </group>
    )
}
