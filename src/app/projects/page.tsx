'use client';

import Link from 'next/link';
import Image from 'next/image';
import  { useState} from 'react';

const projectsData = [
  {
    title: 'Dashboard Marketing Sanders',
    subtitle: 'Data Analysis (Streamlit)',
    description: 'A dynamic dashboard built to visualize sales data and customer behavior for an fintech industry. It includes interactive charts and filters for in-depth analysis.',
    technologies: ['Python', 'Streamlit', 'SQL'],
    linkText: 'View Project',
    linkHref: 'https://appdailyreport-uvu9t5g43xhhodyh2ueaqt.streamlit.app/',
    imageSrc: '/images/streamlit-data-report.jpg',
  },
  {
    title: 'Sanders Backend - Admin Panel',
    subtitle: 'Backend Development (Django)',
    description: 'A website-based backend application to assist companies across divisions.',
    technologies: ['Python', 'Django', 'Database SQL', 'Restfull API'],
    linkText: 'View Repository',
    linkHref: 'https://github.com/ibnurisk11/sanders-dashboard',
    imageSrc: '/images/django-sanders-backend.png',
  },
];

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="container mx-auto px-8 py-8 bg-gray-900">
      
      {/* Header */}
      <header id="top" className="text-center py-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white-900">My Projects</h1>
        <p className="text-lg md:text-xl text-blue-400 mt-2">A collection of my work in SEO, Data Analysis, and Web Development.</p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-3 mx-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Featured Projects</h2>
        
        <div className="space-y-6 mx-32 px-32">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <Image 
                  src={project.imageSrc} 
                  alt={project.title} 
                  width={400} 
                  height={250} 
                  layout="responsive"
                  className="rounded-lg shadow-md cursor-pointer"
                  onClick={() => openModal(project.imageSrc)} 
                />
              </div>
              <div className="md:w-2/3">
                <h5 className="text-xl md:text-2xl font-bold text-gray-800">{project.title}</h5>
                <h6 className="text-lg text-blue-600 mb-3">{project.subtitle}</h6>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                
                <div className="mt-4">
                  <h6 className="font-bold text-gray-800 mb-2">Technologies Used:</h6>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={project.linkHref} className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300">
                  {project.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

            {/* Pop-up Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-white text-3xl font-bold p-2 z-10"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}