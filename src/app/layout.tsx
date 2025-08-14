'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

// Catatan: Metadata tidak bisa lagi diekspor dari Client Component, jadi kita akan hapus.
// Sebaliknya, metadata bisa didefinisikan di `page.tsx` atau file layout Server Component.
// Karena kita mengubah ini menjadi Client Component, kita akan biarkan tanpa metadata.
// Untuk proyek yang lebih besar, pisahkan navbar ke Client Component terpisah.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4 fixed w-full z-20 top-0">
          <div className="container mx-auto flex justify-between items-center">
            <Link className="flex items-center text-lg font-semibold" href="/">
              Ibnu Riski
            </Link>

            {/* Tombol toggle untuk mobile */}
            <button className="md:hidden" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Menu navigasi desktop */}
            <div className="hidden md:flex space-x-6">
              <Link className="hover:text-gray-300" href="/">
                Beranda
              </Link>
              <Link className="hover:text-gray-300" href="/curriculum-vitae">
                Curriculum Vitae
              </Link>
              <Link className="hover:text-gray-300" href="/projects">
                Project
              </Link>
            </div>
          </div>
        </nav>

        {/* Menu navigasi mobile (muncul saat di-toggle) */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 text-white z-10 transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link onClick={toggleMenu} className="hover:text-gray-300 py-2 w-full text-center" href="/">
                Beranda
              </Link>
              <Link onClick={toggleMenu} className="hover:text-gray-300 py-2 w-full text-center" href="/curriculum-vitae">
                Curriculum Vitae
              </Link>
              <Link onClick={toggleMenu} className="hover:text-gray-300 py-2 w-full text-center" href="/projects">
                Project
              </Link>
            </div>
          </div>
        )}

        <main className="pt-8">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          <div className="container mx-auto">
            <p>&copy; 2025 - Ibnu Riski</p>
          </div>
        </footer>
      </body>
    </html>
  );
}