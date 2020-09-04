import React, { Fragment } from "react";

import Homepage from "./components/homepage";
import Review from "./components/review";
import Service from "./components/our_Service";
import TTTT from "./components/rtest";
import { Parallax, Background } from "react-parallax";
import Fuel from "./Image/Feature/fuelmonitoring.png";
import Summery from "./Image/Feature/summery.png";

function App() {
  return (
    <Homepage />
    // <Fragment>
    //   <Parallax
    //     bgImage="https://www.bootstrapdash.com/wp-content/uploads/2019/02/bootstrap-parallax-templates.png"
    //     bgImageAlt="the cat"
    //     strength={200}
    //   >
    //     <Review />
    //   </Parallax>

    //   <Service />
    // </Fragment>
  );
}

export default App;
