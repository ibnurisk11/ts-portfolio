import React from 'react';

// Data proyek yang Anda berikan
const projectsData = [
  {
    title: 'Dashboard Marketing Sanders',
    subtitle: 'Data Analysis (Streamlit)',
    description: 'A dynamic dashboard built to visualize sales data and customer behavior for an fintech industry. It includes interactive charts and filters for in-depth analysis.',
    technologies: ['Python', 'Streamlit', 'SQL'],
    linkText: 'View Project',
    linkHref: 'https://appdailyreport-uvu9t5g43xhhodyh2ueaqt.streamlit.app/',
    imageSrc: 'images/streamlit-data-report.jpg', // Menggunakan placeholder karena path lokal tidak didukung
  },
  {
    title: 'Sanders Backend - Admin Panel',
    subtitle: 'Backend Development (Django)',
    description: 'A website-based backend application to assist companies across divisions.',
    technologies: ['Python', 'Django', 'Database SQL', 'Restfull API'],
    linkText: 'View Repository',
    linkHref: 'https://github.com/ibnurisk11/sanders-dashboard',
    imageSrc: 'images/django-sanders-backend.png', // Menggunakan placeholder karena path lokal tidak didukung
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-white py-8">Proyek Saya</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Bagian gambar proyek */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bagian isi kartu proyek */}
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h2>
              <h3 className="text-sm font-medium text-gray-500 mb-4">{project.subtitle}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              
              {/* Bagian yang sejajar (teknologi dan tombol) */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Teknologi:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol "Lihat Proyek" dengan efek hover */}
                <a
                  href={project.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow-md
                             hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
                >
                  {project.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
