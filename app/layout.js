import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
    'Professional IT Services | PC Building | Media Servers | Kentville | Nova Scotia',
  description:
    'Expert IT support, custom PC builds, media server setup, and gaming configurations. Fast, reliable service in Kentville, Nova Scotia.',
  keywords:
    'IT support, PC building, media server, gaming setup, emulation, Kentville',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
