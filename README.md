# SRUJAN MIRJI | Creative Developer Portfolio

![Portfolio Preview](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000)

A high-performance, immersive 3D portfolio website built with modern web technologies. This project showcases interactive 3D elements, scroll-driven animations, and responsive design principles.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [GSAP](https://greensock.com/gsap/) & [Maath](https://github.com/pmndrs/maath)
- **Deployment**: Vercel (Recommended)

## ✨ Key Features

- **Immersive 3D Hero**: Interactive, distorted sphere shading with reactive mouse movement.
- **Scroll-Driven Storytelling**: Seamless camera transitions between sections using `ScrollControls`.
- **Dynamic Project Gallery**: 3D floating cards showcasing work with smooth easing.
- **Performance Optimized**: 
  - Dynamic imports for heavy 3D components.
  - Efficient particle rendering.
  - Optimized asset loading.
- **Responsive Design**: Adaptive layouts and camera positioning for mobile and desktop.

## 🛠️ Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── canvas/           # 3D R3F components (Scene, Blob, Particles)
│   └── dom/              # HTML overlays (Hero, About, Contact)
├── constants/            # Data files (projects.ts)
└── styles/               # Global styles
```

## 📬 Contact

- **Email**: [Srujanmirji10@gmail.com](mailto:Srujanmirji10@gmail.com)
- **GitHub**: [Srujanmirji](https://github.com/Srujanmirji)
- **LinkedIn**: [Srujan Mirji](https://www.linkedin.com/in/srujanmirji/)

---

© 2026 Srujan Mirji. All Rights Reserved.
