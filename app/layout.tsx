import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const font = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Лол Playground',
  description: 'Immersive playground of surreal lol energy rendered in neon gradients'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`min-h-screen antialiased bg-slate-950 text-slate-50 ${font.variable}`}>
        <div className="relative flex flex-col min-h-screen overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-15%] left-[-5%] h-80 w-80 rounded-full bg-fuchsia/40 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-neon/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_55%)]" />
          </div>
          <main className="relative flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
