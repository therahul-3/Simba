import residentialIcon from '../assets/residential.png';
import commercialIcon from '../assets/commercial.png';
import industrialIcon from '../assets/industrial-park.png';
import civilIcon from '../assets/civil.png';

function Projects() {
  const projectItems = [
    { label: "Residential Projects", icon: residentialIcon  },
    { label: "Commercial Projects", icon: commercialIcon },
    { label: "Industrial Projects", icon: industrialIcon },
    { label: "Civil Projects", icon: civilIcon},
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <h3 className="fw-bold" style={{ color: '#f15a22' }}>
              No compromise<br />on product quality.
            </h3>
          </div>

          {/* Right Icons */}
          <div className="col-md-9">
            <div className="d-flex justify-content-around flex-wrap position-relative">
              {projectItems.map((item, index) => (
                <div
                  key={index}
                  className="text-center px-3 position-relative"
                  style={{ flex: '1 1 25%', maxWidth: '25%' }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="mb-2"
                    style={{
                      height: '40px',
                      filter: 'brightness(0) saturate(100%) invert(43%) sepia(94%) saturate(1166%) hue-rotate(344deg) brightness(103%) contrast(101%)'
                      // this filter turns PNGs orange-like #f15a22
                    }}
                  />
                  <p className="mb-0 small text-secondary">{item.label}</p>

                  {/* Divider except after last item */}
                  {index !== projectItems.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '10%',
                        right: 0,
                        height: '90%',
                        width: '1px',
                        backgroundColor: '#ddd',
                      }}
                      className="d-none d-md-block"
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
