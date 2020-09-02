import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide0 from "../Image/screen/s1.png";
import Slide1 from "../Image/screen/s13.png";
import Slide2 from "../Image/screen/s3.png";
import Slide3 from "../Image/screen/s4.png";
import Slide4 from "../Image/screen/s5.png";
import Slide5 from "../Image/screen/s6.png";
import Slide6 from "../Image/screen/s7.png";
import Slide7 from "../Image/screen/s8.png";
import Slide8 from "../Image/screen/s9.png";
import Slide9 from "../Image/screen/s10.png";
import Slide10 from "../Image/screen/s11.png";
import Slide11 from "../Image/screen/s12.png";
import Slide12 from "../Image/screen/s2.png";
import Slide13 from "../Image/screen/s14.png";
import Slide14 from "../Image/screen/s15.png";
import Slide15 from "../Image/screen/s16.png";
import Slide16 from "../Image/screen/s17.png";
import Slide17 from "../Image/screen/s18.png";

const sliderImagges = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
];

export default class Screenshot extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div
        id="screenshot"
        style={{ width: "100%", height: 600, overflow: "hidden" }}
      >
        <Slider {...settings}>
          {sliderImagges.map((img, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={img} style={{ height: 340, width: 216 }} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
