import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { UseFacilities } from "../../hooks";
import "./Facilities.css";

import facilityThumb from "../../assets/facilities/f.png";

const Facilities = () => {
  const [facilities] = UseFacilities();

  return (
    <div className="facilities">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* left side */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <div>
              <SectionTitle>
                <h6>Features</h6>
                <h2>Available in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </SectionTitle>
              <figure>
                <img src={facilityThumb} alt="Features" className="img-fluid" />
              </figure>
            </div>
          </div>
          {/* right side */}
          <div className="col-xl-8 col-lg-8 col-md-12 col-12 ">
            <div className="facility-wrapper">
              {facilities.map((facility) => {
                const { facilities, thumb } = facility;
                return (
                  <div className="facility shadow">
                    <figure>
                      <img src={thumb} alt="facility" className="img fluid" />
                    </figure>
                    <p className="text-center">{facilities}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;