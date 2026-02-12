'use client'

import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { damp3 } from 'maath/easing'
import { useRef } from 'react'

export default function SceneLayout() {
    const { camera, size } = useThree()
    const scroll = useScroll()
    const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0))

    useFrame((state, delta) => {
        // Current scroll offset (0 to 1)
        // Pages: 5
        // Hero: 0-0.2
        // About: 0.2-0.4
        // Gallery: 0.4-0.8 (Longer section?)
        // Contact: 0.8-1

        // Simpler mapping for 5 pages:
        // 0 - 0.2: Hero to About
        // 0.2 - 0.4: About
        // 0.4 - 0.6: About to Gallery
        // 0.6 - 0.8: Gallery
        // 0.8 - 1.0: Contact

        const offset = scroll.offset
        const defaultZ = size.width < 768 ? 14 : 8

        let targetX = 0
        let targetZ = defaultZ
        let targetY = 0

        if (offset < 0.2) {
            // Hero -> About
            // Map 0-0.2 to 0-1
            const p = offset * 5
            targetX = THREE.MathUtils.lerp(0, -2, p)
            targetZ = THREE.MathUtils.lerp(defaultZ, defaultZ - 2, p)
        } else if (offset < 0.4) {
            // About (Hold)
            targetX = -2
            targetZ = defaultZ - 2
        } else if (offset < 0.6) {
            // About -> Gallery (Center & Down)
            // Map 0.4-0.6 to 0-1
            const p = (offset - 0.4) * 5
            targetX = THREE.MathUtils.lerp(-2, 0, p)
            targetZ = THREE.MathUtils.lerp(defaultZ - 2, defaultZ, p)
            targetY = THREE.MathUtils.lerp(0, -3.5, p)
        } else if (offset < 0.8) {
            // Gallery (Hold)
            targetX = 0
            targetY = -3.5
        } else {
            // Gallery -> Contact (Down & Zoom in)
            // Map 0.8-1 to 0-1
            const p = (offset - 0.8) * 5
            targetX = 0
            // Move down to -6 (desktop) or -12 (mobile) to clear the gallery
            const footerY = size.width < 768 ? -12 : -6
            targetY = THREE.MathUtils.lerp(-3.5, footerY, p)
            // Zoom in?
            targetZ = THREE.MathUtils.lerp(defaultZ, defaultZ - 2, p)
        }

        // Apply smooth interpolation
        damp3(camera.position, [targetX, targetY, targetZ], 0.2, delta)
        damp3(lookAtTarget.current, [0, targetY, 0], 0.2, delta)
        camera.lookAt(lookAtTarget.current)
    })

    return null
}
