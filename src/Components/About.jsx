function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-around align-items-start">

          {/* Left Column */}
          <div className="col-md-5 mb-4 d-flex flex-column justify-content-between" style={{ minHeight: '100%', position: 'relative' }}>
            <h1 style={{
              color: "gray",
              opacity: '0.1',
              fontWeight: 'bolder',
              fontSize: '6.5rem',
              width: '100%',
              zIndex: '200',
              position: 'absolute',
              top: '-65px',
              left: '50px'
            }}>Welcome</h1>
            <div>
              <h2 className="mb-4 fw-bold  px-0 mx-0 w-90" style={{ textAlign: 'justify' }} >
                Making homes accessible to one and all in Tanzania.
              </h2>
              <p className=" px-0 mx-0 custom-gray w-90" style={{ textAlign: 'justify' }} >
                At Simba Developer, we prioritize doing the right things, the right way,
                for the right reasons. Guided by strong ethics, we aim to be a successful,
                sustainable, and responsible company in Tanzania.
                Integrity and transparency shape our decisions, while a culture of honesty
                fosters positive relationships with our customers, suppliers, and communities.
              </p>
            </div>
            <div style={{ position: 'absolute', right: '16px', bottom: '-40px' }}>
              <p className="mb-0 border-bottom border-danger pb-1 d-inline-block" style={{ fontSize: '0.9rem' }}>
                Continue Exploring
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-md-6 row text-left">
            {[
              { value: '2005', label: 'Year of Incorporation' },
              { value: '700+', label: 'Motivated Employees' },
              { value: '40+', label: 'Projects Executed' },
              { value: '80+', label: 'High-tech Machinery' },
            ].map((item, index) => (
              <div className="col-6 mb-4" key={index}>
                <h3 className="fw-bold  mb-1">{item.value}</h3>
                <p className="mb-0 border-bottom border-danger pb-1 d-inline-block custom-gray" style={{ fontSize: '0.9rem' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
