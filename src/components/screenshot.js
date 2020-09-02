import React, { Component, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide0 from "../Image/screen/s1.png";
import Slide1 from "../Image/screen/s2.png";
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
import Slide12 from "../Image/screen/s13.png";
import Slide13 from "../Image/screen/s14.png";
import Slide14 from "../Image/screen/s15.png";
import Slide15 from "../Image/screen/s16.png";
import Slide16 from "../Image/screen/s17.png";
import Slide17 from "../Image/screen/s18.png";
import { Typography, Fade } from "@material-ui/core";

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

const names = [
  "SignUp",
  "SignIn",
  "Assign Vehicle",
  "Expanded Vehicle list",
  "Map",
  "Map Expanded",
  "On-Off Status",
  "Distance Chart",
  "Distance Expanded",
  "Monthly Report",
  "Monthly Expanded",
  "Driver Profile Update",
  "Side Nav",
  "Payment Guide",
  "Transtion",
  "Transtion Summery",
  "Transtion Expanded",
  "Setting",
];

const Screenshot = () => {
  const [name, setName] = useState(names[1]);
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
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",

        overflow: "hidden",
      }}
    >
      <Typography variant="h4" style={{ padding: 20 }}>
        {" "}
        ScreenShoot
      </Typography>

      <Typography variant="h6">{name}</Typography>

      <div style={{ width: "70%" }}>
        <Slider
          afterChange={(index) =>
            setName((old) => names[(index + 1) % names.length])
          }
          {...settings}
        >
          {sliderImagges.map((img, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={img} style={{ height: 500 }} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Screenshot;
