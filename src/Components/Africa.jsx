import React from "react";
import "./Africa.css";
import africaMap from "../assets/map-art.png";

const Africa = () => {
  return (
    <section id="africa">
      <div className="africa-section py-5 px-0 ">
        <div className="container position-relative">
          <div className="row align-items-center flex-column flex-md-row africascale" >

            {/* Africa Image (left, z-index on top) */}
            <div className="col-md-6 text-center position-relative z-2">
              <img src={africaMap} alt="Africa Map" className="africa-img img-fluid" />
            </div>

            {/* Orange Speech Box (right) */}
            <div className="col-md-6 position-relative z-1">
              <div className="speech-box text-white position-relative">
                <h3 className="mb-2 heading-align">
                  Always keeping <br /> <span className="text-highlight">Africa</span> <em>first</em>
                </h3>
                <p className="mb-0 custom-mini-text">
                  At Simba Developer, we prioritize doing the right things, the right way, for the right reasons.
                  Guided by strong ethics, we aim to be a successful, sustainable, and responsible company in Tanzania.
                  Integrity and transparency shape our decisions, while a culture of honesty fosters positive relationships
                  with our customers, suppliers, and communities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Africa;




