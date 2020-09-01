import React, { Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import Card from "@material-ui/core/Card";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {
  grey,
  blue,
  indigo,
  orange,
  blueGrey,
  amber,
  lightBlue,
} from "@material-ui/core/colors";

import AOS from "aos";
import "aos/dist/aos.css";
import { ServiceData } from "../data";

AOS.init();
const OurService = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Box
        id="Service"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ padding: 10 }}
      >
        <Typography variant="h4"> Our Service </Typography>
        <Typography variant="h6"> Our Service </Typography>
      </Box>

      <Box>
        <Grid
          container
          style={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: grey[300],
          }}
        >
          {ServiceData.map((item, index) => {
            return (
              <Grid
                item
                xs={4}
                key={index}
                data-aos="fade-up"
                style={{ padding: 15 }}
              >
                <Link
                  style={{ activeClass: "1px solid #333" }}
                  activeClass="active"
                  to={item.title}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <Avatar
                      src={item.image}
                      style={{ width: 80, height: 80 }}
                    ></Avatar>

                    <Card
                      style={{
                        marginTop: -40,
                        height: 100,
                        width: 275,
                        paddingTop: 40,
                      }}
                    >
                      <Box display="flex" justifyContent="center">
                        <Typography variant="overline">{item.title}</Typography>
                      </Box>
                    </Card>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default OurService;
