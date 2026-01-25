import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SpaceBackground } from '@/src/components/background/SpaceBackground';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/bottom';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akash Patil | Full-Stack Developer & GenAI',
  description: 'Third-year Computer Engineering student at VJTI Mumbai specializing in full-stack development and generative AI.',
  keywords: ['Akash Patil', 'Full-Stack Developer', 'GenAI', 'Agentic AI', 'VJTI', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Akash Patil' }],
  openGraph: {
    title: 'Akash Patil | Full-Stack Developer & GenAI',
    description: 'Third-year Computer Engineering student at VJTI Mumbai specializing in full-stack development and generative AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpaceBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}