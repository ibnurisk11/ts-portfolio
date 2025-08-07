'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const roles = [
  'Data Analyst',
  'Digital Marketing Analyst',
  'Fullstack Developer',
  'Data Engineer',
  'Database Engineer',
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
          With four years of experience in digital marketing and website development, I have developed a strong analytical mindset and a passion for data.<br></br>
          My current focus is on building the technical skills required for a career in <b>Data Engineering</b> and <b>Data Science</b>. I am actively learning how to manage databases and build back-end systems to support data pipelines and ETL processes.<br></br>
          I am driven by the challenge of solving problems and using data to generate valuable insights and architect effective solutions across various industries.
        </p>
        <div className="mt-10">
          <Link
            href="/cv/cv-ibnu.pdf"
            download
            className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faFileArrowDown} className="h-5 w-5" />
            <span>Download My Latest CV Here</span>
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