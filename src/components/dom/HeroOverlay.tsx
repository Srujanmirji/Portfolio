'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useScroll } from '@react-three/drei'

export default function HeroOverlay() {
    const container = useRef<HTMLDivElement>(null!)
    const scroll = useScroll()

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo('.hero-char',
            { y: 100, opacity: 0, rotateX: -90 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1 }
        )
            .fromTo('.hero-sub',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                '-=0.5'
            )
            .fromTo('.hero-btn',
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
                '-=0.5'
            )
    }, { scope: container })

    return (
        <div ref={container} className="w-full h-full flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <div className="absolute top-10 left-0 w-full text-center">
                <p className="text-sm font-light tracking-[0.3em] text-zinc-500">PORTFOLIO</p>
            </div>

            <h1 className="text-5xl md:text-9xl font-bold tracking-tighter text-white overflow-hidden perspective-text relative z-10 drop-shadow-2xl">
                {"SRUJAN MIRJI".split('').map((char, i) => (
                    <span key={i} className="hero-char inline-block" style={{ minWidth: char === ' ' ? '0.3em' : '0' }}>
                        {char}
                    </span>
                ))}
            </h1>

            <p className="hero-sub mt-4 text-xl md:text-2xl text-cyan-50 max-w-lg mx-auto font-light tracking-wide drop-shadow-lg drop-shadow-cyan-500/50">
                Creative Developer | 3D & Web Experiences
            </p>

            <button
                onClick={() => {
                    const height = window.innerHeight
                    // Use dreis scroll container
                    scroll.el.scrollTo({ top: height, behavior: 'smooth' })
                }}
                className="hero-btn mt-12 px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold tracking-wider hover:bg-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 pointer-events-auto cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
                EXPLORE WORK
            </button>
        </div>
    )
}
