'use client'

export default function ContactSection() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-end pb-48 text-center z-10 pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-widest">
                GET IN TOUCH
            </h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                <a
                    href="mailto:Srujanmirji10@gmail.com"
                    className="text-xl md:text-2xl text-zinc-400 hover:text-cyan-400 transition-colors duration-300 font-light tracking-wide border-b border-transparent hover:border-cyan-400 pb-1"
                >
                    EMAIL
                </a>
                <a
                    href="https://github.com/Srujanmirji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl text-zinc-400 hover:text-cyan-400 transition-colors duration-300 font-light tracking-wide border-b border-transparent hover:border-cyan-400 pb-1"
                >
                    GITHUB
                </a>
                <a
                    href="https://www.linkedin.com/in/srujanmirji/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl text-zinc-400 hover:text-cyan-400 transition-colors duration-300 font-light tracking-wide border-b border-transparent hover:border-cyan-400 pb-1"
                >
                    LINKEDIN
                </a>
            </div>

            <p className="absolute bottom-10 text-zinc-600 text-sm">
                © 2026 NEXT GEN PORTFOLIO
            </p>
        </div>
    )
}
