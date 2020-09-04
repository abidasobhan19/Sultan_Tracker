import React from "react";
import { Parallax, Background } from "react-parallax";
import Fuel from "../Image/Feature/fuelmonitoring.png";
import Summery from "../Image/Feature/summery.png";
import Alerts from "../Image/Feature/alerts.png";
import Review from "./review";

const TTTT = () => (
  <div>
    {/* -----basic config-----*/}
    <Parallax blur={10} bgImageAlt="the cat" strength={200}>
      <Review />
      <div style={{ height: "200px" }} />
    </Parallax>

    {/* -----dynamic blur-----*/}
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Summery}
      bgImageAlt="the dog"
      strength={-200}
    >
      Blur transition from min to max
      <div style={{ height: "200px" }} />
    </Parallax>

    {/* -----custom background element-----*/}
    <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
      </Background>
    </Parallax>

    {/* -----renderProp: "renderLayer"-----*/}
    <Parallax
      bgImage={Alerts}
      strength={400}
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            background: `rgba(255, 125, 0, ${percentage * 1})`,
            left: "50%",
            top: "50%",
            width: percentage * 500,
            height: percentage * 500,
          }}
        />
      )}
    >
      <p>... Content</p>
    </Parallax>
  </div>
);
export default TTTT;
