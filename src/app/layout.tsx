import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Milo Tattoo Academy - Aprende el Arte del Tatuaje',
  description: 'Plataforma de aprendizaje moderna y móvil-optimizada para el arte del tatuaje. Descubre técnicas, historia y cultura del tatuaje a tu propio ritmo.',
  keywords: ['tatuaje', 'tattoo', 'academia', 'aprendizaje', 'arte', 'técnicas', 'historia'],
  authors: [{ name: 'Milo Tattoo Academy' }],
  creator: 'Milo Tattoo Academy',
  publisher: 'Milo Tattoo Academy',
  metadataBase: new URL('https://milo-tattoo-academy.vercel.app'),
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://milo-tattoo-academy.vercel.app',
    siteName: 'Milo Tattoo Academy',
    title: 'Milo Tattoo Academy - Aprende el Arte del Tatuaje',
    description: 'Plataforma de aprendizaje moderna y móvil-optimizada para el arte del tatuaje.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Milo Tattoo Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milo Tattoo Academy - Aprende el Arte del Tatuaje',
    description: 'Plataforma de aprendizaje moderna y móvil-optimizada para el arte del tatuaje.',
    images: ['/images/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FF6B9D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
