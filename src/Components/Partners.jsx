import React from "react";

// Import your images here
import hma from "../assets/hma-arch-logo.png";
import gazelle from "../assets/gazalle-logo.png";
import projectDesign from "../assets/proj-desi-sol-logo.png";
import woodpecker from "../assets/woodpecker-inv-logo.png";
import lucky from "../assets/lucky-cement-logo.png";

const logos = [hma, gazelle, projectDesign, woodpecker, lucky];

const Partners = () => {
  return (
    <div className="py-5 bg-white text-center mt-1">
      <div className="container">
        <h4 className="fw-bolder mb-5">Manufacturing &amp; Fabrication Partners</h4>

        {/* Use justify-content-around to evenly space logos */}
        <div className="row justify-content-around align-items-center g-4">
          {logos.map((logo, index) => (
            <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center" key={index}>
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="img-fluid"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
