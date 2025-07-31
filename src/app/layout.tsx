import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Milo Tattoo Academy',
  description: 'Aprende el arte del tatuaje a tu propio ritmo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
