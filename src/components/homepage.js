import React from "react";
import { Box } from "@material-ui/core";
import Nav from "./nav";
import Slider from "./Slider";
import OurService from "./our_Service";
import FeatureItem from "./featuresItem";
import Pricing from "./pricing";
import Review from "./review";
import Team from "./Team";
import Contact from "./contact";

// import MySlider from "./slider";

import { featuredData } from "../data";
import { grey } from "@material-ui/core/colors";
import TopClients from "./topclients";
import Screenshot from "./screenshot";
// import {  } from "../servicedata";

const Homepage = () => {
  return (
    <Box style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Nav />

      <Box
        display="flex"
        style={{ height: "100vh", maxWidth: "100%", overflow: "hidden" }}
      >
        <Slider />
      </Box>

      <Box display="flex" flexDirection="column">
        <OurService />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{ backgroundColor: grey[100] }}
      >
        {featuredData.map((item, index) => (
          <FeatureItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            animation={item.animation}
            index={index}
          />
        ))}
      </Box>
      <Box display="flex" flexDirection="column" style={{ margin: 20 }}>
        <Pricing />
      </Box>
      <Box display="flex" flexDirection="column">
        <Review />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        style={{ height: 500, padding: 10 }}
      >
        <Team />
      </Box>
      <Box display="flex" flexDirection="column">
        <Screenshot />
      </Box>
      <Box display="flex" flexDirection="column">
        <TopClients />
      </Box>
      <Box display="flex" flexDirection="column">
        <Contact />
      </Box>
    </Box>
  );
};

export default Homepage;
