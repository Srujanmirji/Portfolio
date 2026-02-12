'use client'

import dynamic from 'next/dynamic'
import HeroOverlay from '@/components/dom/HeroOverlay'
import AboutSection from '@/components/dom/AboutSection'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })
const HeroObject = dynamic(() => import('@/components/canvas/HeroBlob'), { ssr: false })
const Particles = dynamic(() => import('@/components/canvas/Particles'), { ssr: false })
const Effects = dynamic(() => import('@/components/canvas/Effects'), { ssr: false })
const SceneLayout = dynamic(() => import('@/components/canvas/SceneLayout'), { ssr: false })
const ProjectGallery = dynamic(() => import('@/components/canvas/ProjectGallery'), { ssr: false })
const ContactBall = dynamic(() => import('@/components/canvas/ContactBall'), { ssr: false })
const AboutSubject = dynamic(() => import('@/components/canvas/AboutSubject'), { ssr: false })
import ContactSection from '@/components/dom/ContactSection'
import { ScrollControls, Scroll } from '@react-three/drei'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <ScrollControls pages={5} damping={0.1}>
            <SceneLayout />
            <color attach="background" args={['#050505']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#f00" intensity={2} />
            <pointLight position={[0, 10, 0]} color="#0f0" intensity={1} />
            <HeroObject position={[0, 0, 0]} />
            <AboutSubject />
            <Particles />
            <ProjectGallery />

            {/* DOM Scroll Content */}
            <Scroll html style={{ width: '100%', height: '100%' }}>
              <HeroOverlay />
              <AboutSection />

              {/* Spacer for 3D Gallery Section (Pages 2-4 approx) */}
              <div className="w-full h-[200vh]" />

              <ContactSection />
            </Scroll>

          </ScrollControls>
          <Effects />
        </Scene>
      </div>
    </main>
  )
}
