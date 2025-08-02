import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ibnu Riski - Projects',
  description: 'A collection of my work in SEO, Data Analysis, and Web Development.',
};

const projectsData = [
  {
    title: 'E-commerce Dashboard',
    subtitle: 'Web Development (Django, Streamlit)',
    description: 'A dynamic dashboard built to visualize sales data and customer behavior for an e-commerce platform. It includes interactive charts and filters for in-depth analysis.',
    technologies: ['Python', 'Django', 'Streamlit', 'SQL', 'Power BI'],
    linkText: 'View Project',
    linkHref: '#',
  },
  {
    title: 'SEO Optimization Campaign',
    subtitle: 'Digital Marketing (SEO)',
    description: 'Led an SEO campaign for a non-profit organization, increasing organic traffic by 40% and improving keyword rankings for key fundraising terms.',
    technologies: ['Google Analytics', 'Google Search Console', 'Keyword Research', 'Content Audits'],
    linkText: 'Case Study',
    linkHref: '#',
  },
  {
    title: 'Customer Churn Prediction',
    subtitle: 'Data Analytics',
    description: 'Developed a predictive model using machine learning to identify customers at risk of churning, helping the company proactively retain valuable clients.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
    linkText: 'View on Github',
    linkHref: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-8 py-8 mt-16 md:mt-20">
      
      {/* Header */}
      <header id="top" className="text-center py-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white-900">My Projects</h1>
        <p className="text-lg md:text-xl text-yellow-600 mt-2">A collection of my work in SEO, Data Analysis, and Web Development.</p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-3">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Featured Projects</h2>
        
        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
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
          ))}
        </div>
      </section>

    </div>
  );
}