import Link from 'next/link';

export default function CurriculumVitaePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 text-gray-800">
      
      {/* Header */}
      <header id="top" className="text-center py-8 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">IBNU RISKI</h1>
        <p className="text-lg text-gray-600 mt-2">Bandung, Indonesia</p>
        <p className="text-xl text-blue-600 font-bold mt-1">SEO Specialist | Data Analyst | Web Developer</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="https://www.linkedin.com/in/ibnu-riski-a13107126/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">LinkedIn</Link>
          <Link href="https://github.com/ibnurisk11" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">Github</Link>
          <Link href="https://blog.insanbumimandiri.org/author/ibnuriski/" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">Article Publication</Link>
          <Link href="https://scholar.google.com/citations?user=DsMjXQ0AAAAJ&hl=en" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md">Scientific Publication</Link>
        </div>
      </header>

      {/* Summary Section */}
      <section id="summary" className="bg-white p-6 rounded-lg shadow-xl mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 text-blue-600">SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed text-base">Has experience as a Database Administrator, especially in MySQL. Ibnu is currently working as SQL Database Administrator at Nabati Group specializing in Data Cleansing and Reporting. Adaptive and fast learner with strong analytical and problem-solving skills with proven ability to meet deadlines, prioritize, and consistently deliver high quality results.</p>
      </section>
      
      {/* Work Experience Section */}
      <section id="work-experience" className="bg-white p-6 rounded-lg shadow-xl mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 text-blue-600">WORK EXPERIENCE</h2>
        {/* PT. Satustop Finansial Solusi (Nabati Group) */}
        <div className="mb-6 pb-4 border-b border-gray-100 last:border-b-0">
          <h5 className="text-xl font-bold">PT. Satustop Finansial Solusi (Nabati Group)</h5>
          <h6 className="text-lg text-gray-700 font-semibold">SQL Database Administrator</h6>
          <p className="text-sm text-gray-500 italic">Bandung | Nov 2022 - Present</p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Perform routine database maintenance, including backups and optimization, to ensure optimal performance and data integrity.</li>
            <li>Troubleshoot and resolve database-related issues reported by end-users or monitoring tools.</li>
            <li>Optimize database queries and stored procedures to improve performance and efficiency.</li>
            <li>Maintain accurate documentation of database configurations, procedures, and troubleshooting steps.</li>
            <li>Generate regular reports on database performance, usage, and maintenance activities for management review.</li>
            <li>Collaborate with other IT teams and business stakeholders to understand database requirements and priorities.</li>
            <li>Building a dashboard in Python using Streamlit</li>
          </ul>
        </div>
        {/* Ada Ide Indonesia */}
        <div className="mb-6 pb-4 border-b border-gray-100 last:border-b-0">
          <h5 className="text-xl font-bold">Ada Ide Indonesia</h5>
          <h6 className="text-lg text-gray-700 font-semibold">SEO & SEM Specialist</h6>
          <p className="text-sm text-gray-500 italic">Bandung | Mar 2022 - Nov 2022</p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Monitor key SEO metrics, including organic traffic, keyword rankings, and backlink profile, using tools like Google Analytics, Google Search Console, and third-party SEO software.</li>
            <li>Analyze keyword competitiveness and search volume to prioritize target keywords for optimization efforts.</li>
            <li>Create and optimize ad copy and landing pages to improve click-through rates (CTR) and conversion rates.</li>
            <li>Monitor and adjust campaign budgets, bids, and targeting settings to maximize ROI.</li>
            <li>Track and analyze campaign performance metrics, such as impressions, clicks, conversions, and cost per acquisition (CPA).</li>
            <li>Provide recommendations for campaign optimization based on performance insights.</li>
            <li>Collaborate with the marketing and development teams to ensure accurate data tracking and reporting.</li>
            <li>Troubleshoot and resolve issues related to tag implementation and data discrepancies.</li>
          </ul>
        </div>
        {/* Insan Bumi Mandiri */}
        <div>
          <h5 className="text-xl font-bold">Insan Bumi Mandiri</h5>
          <h6 className="text-lg text-gray-700 font-semibold">SEO Specialist</h6>
          <p className="text-sm text-gray-500 italic">Bandung | Feb 2021 - Mar 2022</p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Supports SEO and content optimization across channels in collaboration with marketing, creative, and engineering teams, involving article writing, SEM content creation, metadata, copy review, image optimization management, and SEO testing of web pages.</li>
            <li>Works with the data analytics team to continuously track and analyze traffic and user behavior for ongoing success measurement.</li>
            <li>Analyzes performance ranking data and crawl logs, providing recommendations to team members in technical and non-technical disciplines.</li>
            <li>Examines on-page, off-page, and technical factors of the site, offering suggestions to improve overall SEO health.</li>
            <li>Performs keyword research, technical audits, content audits, and competitor analysis to uncover new SEO opportunities.</li>
            <li>Optimizes key on-page elements, including navigation, internal links, semantic markup, crawling/indexing directives, title tags, meta descriptions, h1 headers, and more</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white p-6 rounded-lg shadow-xl mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 text-blue-600">EDUCATION</h2>
        <div>
          <h5 className="text-xl font-bold">Diponegoro University</h5>
          <h6 className="text-lg text-gray-700 font-semibold">Bachelor of Science, Physics | GPA : 3.14/4.00</h6>
          <p className="text-sm text-gray-500 italic">Semarang | Aug 2016 - Mar 2021</p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Awardee of Beasiswa Kartu Indonesia Pintar (KIP) by Ministry of Education and Culture 2016-2021</li>
            <li>Recipient of Research Proposal Funding in the Ministry of Education and Culture&apos;s Student Creativity Program (PKM-PE) 2018, Team Leader</li>
            <li>3rd National Scientific Competition by Student Association Political Science Bangka Belitung University. 2018</li>
            <li>Recipient of Innovation Proposal Funding in the Ministry of Education and Culture&apos;s Student Creativity Program (PKM-KC) 2019, Team Member</li>
            <li>Blog Competition Winner at Zenius Blog Competition, 2019</li>
            <li>2nd (Runner Up) of Ideanation Innovation Competition by Ideanation x Narasi TV (244 teams and 54 universities from throughout Indonesia) 2019, Team Member</li>
            <li>Staff of Research & Development Himpunan Mahasiswa Fisika Universitas Diponegoro 2018</li>
          </ul>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="bg-white p-6 rounded-lg shadow-xl mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 text-blue-600">SKILLS & TOOLS</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h5 className="text-lg font-bold mb-2 text-gray-800">Technical</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Database Design</span>
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Data Modeling</span>
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Backup & Recovery</span>
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Technical Troubleshooting</span>
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Data Analytics</span>
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Data Visualization</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h5 className="text-lg font-bold mb-2 text-gray-800">Softskill</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Problem Solving</span>
              <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Strategic Thinking</span>
              <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Intrapersonal Communication</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h5 className="text-lg font-bold mb-2 text-gray-800">Tools</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Visual Studio Code</span>
              <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Navicat</span>
              <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Microsoft Excel</span>
              <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Power BI</span>
              <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Looker Studio</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h5 className="text-lg font-bold mb-2 text-gray-800">Programming Language</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Python</span>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">SQL</span>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">PHP</span>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Javascript</span>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">C++</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h5 className="text-lg font-bold mb-2 text-gray-800">CSS Framework</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Bootstrap</span>
              <span className="bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Tailwind</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h5 className="text-lg font-bold mb-2 text-gray-800">Web Framework</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Django</span>
              <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Streamlit</span>
              <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">CodeIgniter 3</span>
              <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Laravel</span>
            </div>
          </div>
        </div>
      </section>

      {/* International Exposure Section */}
      <section id="international-exposure" className="bg-white p-6 rounded-lg shadow-xl mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 text-blue-600">INTERNATIONAL EXPOSURE</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
          <li>Silver Medalist at International Engineering Invention & Innovation Exhibition (I-Envex), Universiti Malaysia Perlis 2018 as Team Leader</li>
          <li>Gold Medalist at Bangkok International Intellectual Property, Invention, Innovation and Technology Exposition (IPITEX) 2019, Team Member</li>
        </ul>
      </section>

      {/* Certification Section */}
      <section id="certification" className="bg-white p-6 rounded-lg shadow-xl mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 text-blue-600">CERTIFICATION</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
          <li>Data Science Program - Indosat ID Camp 2023 x Dicoding, Sep 2023- Dec 2023</li>
          <li>Data Science Program - Lintasarta Cloudeka Digischool, Sep 2023-Dec 2023</li>
          <li>DBS Foundation Coding Camp, Apr 2024 - June 2024</li>
        </ul>
      </section>
    </div>
  );
}