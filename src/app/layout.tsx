import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

import Header from '../components/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/assets/svgs/logo.svg" sizes="32x32" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
