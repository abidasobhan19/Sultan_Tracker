import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { grey } from "@material-ui/core/colors";

AOS.init();
const FeatureItem = ({ image, title, description, animation, index }) => {
  return (
    <Box
      id={title}
      data-aos={animation}
      display="flex"
      style={{
        padding: 10,
        backgroundColor: index % 2 === 0 ? grey[50] : grey[300],
      }}
    >
      <Box
        display="flex"
        flexGrow="1"
        style={{ maxWidth: "50%", minWidth: "50%" }}
        order={2}
        justifyContent="center"
        alignItems="center"
      >
        <img src={image} style={{ height: 300 }} />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        flexGrow="1"
        alignItems="center"
        justifyContent="center"
        style={{ padding: 10 }}
        order={index % 2 === 0 ? 3 : 1}
      >
        <Typography
          variant="h6"
          style={{ color: index % 2 === 0 ? grey[600] : grey[800] }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginTop: 10,
            color: index % 2 === 0 ? grey[600] : grey[800],
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureItem;
