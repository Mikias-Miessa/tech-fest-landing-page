import { Inter } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@splidejs/react-splide/css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gobeze Consult-Tech Fest',
  description: 'Tech Festival ',
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
