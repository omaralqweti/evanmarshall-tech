import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title:
    'General Tech Services | Computer Help | Phone Help | Kentville | Nova Scotia',
  description:
    'Honest tech support for homeowners in Kentville & Annapolis Valley. Custom PCs, home media centers, computer repair—no up sells, just solutions that work. 15+ years experience.',
  keywords:
    'computer repair Kentville, PC builder Annapolis Valley, home media centre setup Nova Scotia, custom PC Kentville, laptop repair Kentville, tech support Annapolis Valley, retro gaming emulation, home theater setup, computer troubleshooting, iPhone setup help, Android setup help',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
