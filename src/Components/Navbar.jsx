import logo from '../assets/simba-logo.png';

function Navbar() {
  return (
    <div
      className="position-absolute top-0 start-0 w-100 px-4 pt-3"
      style={{ zIndex: 10 }}
    >
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo stays fixed */}
        <a href="#home">
          <img
            src={logo}
            alt="Simba Logo"
            className="img-fluid"
            style={{ height: '60px', filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-dark p-0"
          style={{ position: 'absolute', top: '0', right: '0' }}
        >
          {/* Fixed Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              outline: 'none',
              boxShadow: 'none',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <ul
              className="navbar-nav text-end"
              style={{
                backgroundColor: '#f15a22',
                padding: '0.2rem 1.8rem',
                zIndex: '9',
                width: 'max-content',
                position: 'relative'
              }}
            >
              {[
                { href: '#home', label: 'HOME' },
                { href: '#about', label: 'PROJECTS UNDERTAKEN' },
                { href: '#projects', label: 'SERVICE OFFERED' },
                { href: '#africa', label: 'WHO WE ARE' },
                { href: '#news', label: 'NEWS & MEDIA' },
                { href: '#contact', label: 'CONTACT US' },
              ].map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className="nav-link text-white"
                    href={link.href}
                    style={{
                      fontSize: '0.65rem',
                      position: 'relative',
                    }}
                  >
                    {link.label}
                    <span
                      className="d-block"
                      style={{
                        height: '2px',
                        width: '0%',
                        backgroundColor: '#fff',
                        transition: 'width 0.3s ease',
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                      }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
            <div style={{
              position: 'absolute',
              backgroundColor: '#f15a22',
              height: '90px',
              width: '50px',
              top: '0', right: '0'
            }}>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;