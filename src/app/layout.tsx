import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { projects } from "@/constants/projects";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srujanmirji.com'),
  title: {
    default: "Srujan Mirji | Creative Developer & 3D Web Experiences",
    template: "%s | Srujan Mirji"
  },
  description: "Portfolio of Srujan Mirji, a Creative Frontend Developer specializing in 3D web experiences, React, Next.js, and WebGL/Three.js.",
  keywords: ["Frontend Developer", "Creative Developer", "3D Web", "Three.js", "React", "Next.js", "WebGL", "Portfolio"],
  authors: [{ name: "Srujan Mirji" }],
  creator: "Srujan Mirji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srujanmirji.com",
    title: "Srujan Mirji | Creative Developer & 3D Web Experiences",
    description: "Immersive 3D portfolio showcasing creative web development work.",
    siteName: "Srujan Mirji Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Srujan Mirji Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srujan Mirji | Creative Developer",
    description: "Interactive 3D portfolio experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Srujan Mirji',
  url: 'https://srujanmirji.com',
  jobTitle: 'Creative Frontend Developer',
  sameAs: [
    'https://github.com/Srujanmirji',
    'https://linkedin.com/in/srujanmirji',
  ],
  knowsAbout: ['Web Development', 'React', 'Next.js', 'Three.js', 'WebGL', 'Creative Coding']
};

const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      image: project.image,
      url: project.link
    }
  }))
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
      </body>
    </html>
  );
}
