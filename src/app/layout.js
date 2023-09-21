import Darko from './Darko';
import './globals.css';
import Footer from './Footer';
import GTag from './GTag';

export const metadata = {
  metadataBase: new URL('https://raw.githubusercontent.com'),
  title: 'Krycom',
  description: 'The best website for plugins',
  keywords: ['dark', 'dark mode', 'night mode'],

  openGraph: {
    title: 'Krycom',
    description: 'The best website for plugins',
    url: 'https://blindsjs.dev',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg',
        width: '1200',
        height: '630'
      }
    ],
  }
}

export default function RootLayout({ children }) {  

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <GTag />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="dark mode night mode" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <link rel="manifest" href="/site.webmanifest.json" />
      </head>
      <body className="">
        {children}
        <Footer />
      </body>
      <Darko />
    </html>
  )
}
