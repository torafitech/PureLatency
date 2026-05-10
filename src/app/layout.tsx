import type { Metadata } from 'next';
import { Inter, Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], weight: ['400','600','700','800'], display: 'swap', variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], display: 'swap', variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Pure Latency',
  description: 'Leading digital and technology services company in Hyderabad, India.',
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      {/* ✅ Make body the main stacking context for content */}
      <body
        className="font-sans"
        style={{
          position: 'relative', // creates stacking context
          zIndex: 10,           // below navbar/drawer (50/60) but above background
        }}
      >
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
