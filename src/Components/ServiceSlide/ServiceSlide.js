import React from "react";
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper";
// swiper
import SectionTitle from "../SectionTitle/SectionTitle";
import { UseServices } from "../../hooks";
import { MyButtonLg } from "../MyButtons/MyButtons";
import "./ServiceSlide.css";

const ServiceSlide = () => {
  const [services] = UseServices();
  return (
    <div className="service-slide">
      <div className="container service-slide-inner">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>Services</h6>
          <h2>We Cover A Big Variety Of Medical Services</h2>
          <p className="text-center">
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <div className="text-end">
            {" "}
            <MyButtonLg
              className={"view-all-btn"}
              style={{
                width: "150px",
                padding: "5px 0",
                background: "#f17732",
                color: "#fff",
              }}
            >
              view all
            </MyButtonLg>
          </div>
        </SectionTitle>

        <div className="service-slide-wrapper">
          <Swiper
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {services.map((service) => {
              const { name, description, thumb } = service;
              return (
                <SwiperSlide>
                  <div className="service-item ">
                    <figure>
                      <img
                        src={thumb}
                        alt="service-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div>
                      <h5>{name}</h5>
                      <p>{description}</p>
                    </div>
                    <MyButtonLg
                      className={"book-now-btn"}
                      style={{
                        width: "150px",
                        padding: "10px 0",
                        background: "#e1e2f6",
                        color: "#565acf",
                      }}
                    >
                      book now
                    </MyButtonLg>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;