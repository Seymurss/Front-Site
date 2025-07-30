import '../assets/Css/Portfolio.css'; 
import { TfiArrowTopRight } from "react-icons/tfi";
import { useState, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("https://back-site-2.onrender.com/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Layihələri çəkməkdə xəta:", error);
      }
    };

    getProjects();
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className='Portfolio'>
      <div className='turn'>
        <p>Our Portfolio</p>
        <h1>Look at my work & <br /> give us <span>your feedback</span></h1>
      </div>

      <div className='projects'>
        {currentProjects.map((project, index) => (
          <div
            className="prbox"
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-delay="300"
          >
            <div className="imgbox">
              <img

                src={`../../../Back-End/storage/app/public${project.image_path}`}


                alt={project.title}
                style={{ width: '96%', height: '260px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  
                }}
              />
            </div>
            <div className="infobox">
              <span>{project.title}</span>
            </div>
            <a href={project.project_url} target="_blank" rel="noopener noreferrer" className='goproject'>
              <TfiArrowTopRight />
            </a>
            <p className="text-gray-500">{project.technologies}</p>
          </div>
        ))}
      </div>

      {/* 🔽 Pagination Buttons */}
      <div className="pagination-buttons">
        <button onClick={handlePrev} disabled={currentPage === 1} className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50">Previous</button>
        <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default Portfolio;
