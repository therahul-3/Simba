
import { useState } from 'react';
import img1 from '../assets/110-resi-landing.jpg';
import img2 from '../assets/icon-project-landing.jpg';
import img3 from '../assets/project-landing.jpg';
import img4 from '../assets/project-landing-2.jpg';

const projectData = [
  { img: img1, label: 'RESIDENTIAL', title: 'BLUE OCEAN RESIDENCY', location: 'ZANZIBAR' },
  { img: img2, label: 'RESIDENTIAL', title: 'CHAMPAWANI ISLAND', location: 'ZANZIBAR' },
  { img: img3, label: 'CIVIL', title: 'RESTORATION OF OLD TOWN & MARKET', location: 'DARAJAN, ZANZIBAR' },
  { img: img4, label: 'COMMERCIAL', title: 'AFRICAB BUSINESS PARK', location: 'DAR ES SALAAM, TANZANIA' }
];

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projectData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  return (
    <div className="container py-5" style={{ position: 'relative' }}>
      <h1 style={{
        color: "gray",
        opacity: '0.09',
        fontWeight: 'bolder',
        fontSize: '6.5rem',
        width: '100%',
        zIndex: '200',
        position: 'absolute',
        top: '-20px',
        left: '10px'
      }}>featuredprojects</h1>
      <h5 className="fw-bold mb-4">
        Completion of projects in a time frame, Continuous human resources development,<br /> and a strong commitment to client satisfaction.
      </h5>

      <div className="d-flex flex-wrap justify-content-between">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="position-relative overflow-hidden"
            style={{
              flex: '1 1 24%',
              opacity: index === activeIndex ? 1 : 0.6,
              transition: 'opacity 0.3s ease',
              position: 'relative'
            }}
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="img-fluid w-100"
              style={{ height: '350px', objectFit: 'cover' }}
            />

            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            ></div>

            {/* Label vertical */}
            <div
              className="position-absolute  start-0 text-white fw-bold text-uppercase small d-flex align-items-center justify-content-center"
              style={{ height: '100%', top: '-30%', writingMode: 'vertical-rl', textOrientation: 'mixed', padding: '5px' }}
            >
              {project.label}
            </div>

            {/* Title and Location */}
            <div
              className="position-absolute bottom-0 start-0 text-white p-2"
              style={{ zIndex: 1 }}
            >
              <h6 className="fw-bold mb-1 small text-uppercase">{project.title}</h6>
              <p className="mb-0 small text-uppercase">{project.location}</p>
            </div>

            {/* Left Button */}
            {index === 0 && (
              <button
                className="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y"
                onClick={prevSlide}
              >
                &#8249;
                PREV
              </button>
            )}

            {/* Right Button */}
            {index === projectData.length - 1 && (
              <button
                className="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y"
                onClick={nextSlide}
              >
                &#8250;
                NEXT
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;

