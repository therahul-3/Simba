import React from "react";
import newsMain from "../assets/news-01.jpg";
import newsSide1 from "../assets/news-02.jpg";
import newsSide2 from "../assets/news-03.jpg";

const News = () => {
  return (
    <section id="news">
      <div className="py-5 bg-white">
        <div className="container" style={{ position: 'relative' }}>
          <h1 style={{
            color: "gray",
            opacity: '0.1',
            fontWeight: 'bolder',
            fontSize: '6.5rem',
            width: '100%',
            zIndex: '200',
            position: 'absolute',
            top: '-55px',
            left: '25px'
          }}>What's new</h1>
          <h4 className="fw-bold mb-4">
            news, announcements <br /> and press releases.
          </h4>

          <div className="row gx-3 gy-4">
            {/* Left: Main News */}
            <div className="col-12 col-md-6">
              <div className="position-relative rounded-0 overflow-hidden">
                <img
                  src={newsMain}
                  alt="Main News"
                  className="img-fluid w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                {/* Overlayed Content */}
                <div
                  className="position-absolute  text-black ps-3 pb-3"
                  style={{ bottom: "3%", left: "1%", background: "rgb(255, 253, 253)", width: "98%" }}
                >
                  <span className="badge bg-orange mb-2 rounded-0 px-2 py-1 small position-absolute "
                    style={{ top: "-38%", left: "0.2%" }}
                  >
                    29 Aug, 2023
                  </span>
                  <h6 className="fw-semibold mt-2 small ">
                    Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group
                  </h6>
                </div>
              </div>
            </div>

            {/* Right: Small News Items */}
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column justify-content-between" style={{ height: "300px" }}>
                {[newsSide1, newsSide2].map((img, index) => (
                  <div
                    className="d-flex align-items-start gap-3"
                    key={index}
                    style={{ height: "48%", marginBottom: index === 0 ? "4%" : "0" }} // gap that balances both
                  >
                    <img
                      src={img}
                      alt={`Side news ${index + 1}`}
                      className="img-fluid"
                      style={{ width: "250px", height: "100%", objectFit: "cover" }}
                    />
                    <div className="d-flex flex-column">
                      <span className="badge bg-orange mb-1 rounded-0 px-2 py-1 small text-white w-50">
                        29 Aug, 2023
                      </span>
                      <p className="small mb-0 fw-medium">
                        Prime Minister Kassim Majaliwa Strengthens <br /> Bilateral Ties During Official Visit to Africab Group
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
