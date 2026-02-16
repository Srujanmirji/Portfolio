import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
    const container = useRef<HTMLDivElement>(null!)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
                end: 'bottom 40%',
                scrub: 1
            }
        })

        tl.fromTo('.about-title', { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
            .fromTo('.about-desc', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, '-=0.2')
            .fromTo('.skill-item', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.1 }, '-=0.2')

    }, { scope: container })

    const skills = ["WebGL", "Three.js", "React", "Next.js", "Tailwind", "GSAP"]

    return (
        <div ref={container} className="w-full h-screen flex flex-col justify-center items-end pr-8 md:pr-32 text-right relative pointer-events-auto">
            <h2 className="about-title text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-white mb-8 tracking-tighter">
                SRUJAN MIRJI
            </h2>
            <div className="about-desc text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed mb-12">
                <p className="mb-4">
                    I am a <span className="text-cyan-400 font-bold">Creative Frontend Developer</span> specializing in building immersive, high-performance web applications.
                </p>
                <p className="mb-4">
                    Leveraging <span className="text-white">WebGL</span> and <span className="text-white">Three.js</span>, I craft interactive digital experiences that feel precise, fast, and intentional.
                </p>
                <p>
                    Currently, I'm expanding my engineering depth in <span className="text-cyan-400 font-bold">Java Full Stack</span> development and <span className="text-cyan-400 font-bold">Algorithms (DSA)</span>.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-end max-w-xl">
                {skills.map((skill, i) => (
                    <span key={i} className="skill-item px-4 py-2 border border-zinc-700 rounded-full text-zinc-300 text-sm md:text-base hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
