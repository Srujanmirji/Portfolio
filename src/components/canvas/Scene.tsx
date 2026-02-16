'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'

export default function Scene({ children, ...props }: any) {
    return (
        <div className='absolute inset-0 w-full h-full' role="presentation" aria-label="Interactive 3D Background">
            <Canvas {...props} dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}
