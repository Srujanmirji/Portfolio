'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'

export default function Particles(props: any) {
    const ref = useRef<any>(null)

    // Create particles in a sphere
    // We use Float32Array for better performance
    // Use useMemo to prevent regeneration on every render
    const sphere = useMemo(() => {
        const data = new Float32Array(2000 * 3)
        return random.inSphere(data, { radius: 12 }) as Float32Array
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    )
}
