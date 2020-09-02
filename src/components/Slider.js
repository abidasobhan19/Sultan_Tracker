import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide0 from "../Image/bg1.png";
import Slide1 from "../Image/hmwall1.png";
import Slidee2 from "../Image/image40.png";
import Slide3 from "../Image/image54.png";
import Slide4 from "../Image/image68.png";

export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ width: "100%", height: 600, overflow: "hidden" }}>
        <Slider {...settings}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={Slide0} style={{ height: 500, width: "100%" }} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={Slide1} style={{ height: 500, width: "100%" }} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={Slidee2} style={{ height: 500, width: "100%" }} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={Slide3} style={{ height: 500, width: "100%" }} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={Slide4} style={{ height: 500, width: "100%" }} />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
