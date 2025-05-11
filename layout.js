import './globals.css';
import Navbar from './navbar';

// Se vuoi usare Google Fonts con Next.js 13+ (opzionale, ma consigliato):
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Road to Heaven – Anima e Stelle Divine Edition',
  description: 'Il framework per startup e PMI che unisce strategia, anima, felicità e impatto positivo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${lato.className} bg-[#FAF6F1]`}>
        <Navbar />
        <main className={playfair.className}>{children}</main>
      </body>
    </html>
  );
}