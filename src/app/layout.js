"use client";

import './globals.css';
import Nav from './Nav';
import Footer from './Footer';

export const metadata = {
  title: 'Krycom | Crypto compare',
  description: 'Compare crypto coins from various exchanges and make informed trade decisions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">

        <div className="">

          <Nav />

          <div className="body-margin font-light pt-16">
            {children}
          </div>

          <Footer />

        </div>

      </body>
    </html>
  )
}
