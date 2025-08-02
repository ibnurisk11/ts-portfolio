'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const roles = [
  'Data Analyst',
  'SEO Specialist',
  'Fullstack Developer',
  'Database Administrator'
];

export default function HomePage() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Ganti teks setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center bg-gray-900 text-white p-8 md:p-12">
      <div className="max-w-2xl">
        <p className="text-xl md:text-2xl font-light text-gray-400 mb-2">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
          IBNU RISKI
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-blue-400">
          {roles[currentRoleIndex]}
        </p>
        
        <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-lg mx-auto">
          I love challenging myself, solving problems with data, and learning new things. Right now, I work as a Junior Database Administrator in the Fintech industry. Before this, I spent three years in digital marketing. I&apos;m really interested in using data to solve problems in different industries, whether it&apos;s analyzing, designing, or engineering solutions.
        </p>

        <div className="mt-10">
          <Link
            href="/cv/ibnu-riski-cv.pdf"
            download
            className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faFileArrowDown} className="h-5 w-5" />
            <span>Download CV</span>
          </Link>
        </div>

        <div className="mt-8 flex justify-center space-x-6 text-gray-300">
          <Link href="https://github.com/ibnurisk11" className="hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/ibnu-riski-a13107126/" className="hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          </Link>
          <Link href="mailto:ibnurisk@gmail.com" className="hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
          </Link>
          <Link href="https://wa.me/6285157511698" className="hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}