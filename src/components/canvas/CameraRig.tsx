'use client'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export default function CameraRig() {
    const { camera, size } = useThree()

    useEffect(() => {
        // Simple responsive zooming
        if (size.width < 768) {
            camera.position.set(0, 0, 10)
        } else {
            camera.position.set(0, 0, 6)
        }
        camera.updateProjectionMatrix()
    }, [size.width, camera])

    return null
}
