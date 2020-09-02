import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Image from "../Image/logo.png";

import Grid from "@material-ui/core/Grid";
import { Link, animateScroll as scroll } from "react-scroll";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Nav = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{
            background: "white",
            boxShadow: "initial",
          }}
        >
          <Toolbar>
            <img src={Image} alt="logo" style={{ height: "80px" }} />

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button color="Black">Home</Button>
              <Button color="Black">
                <Link
                  style={{ activeClass: "1px solid black" }}
                  activeClass="active"
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Our Service
                </Link>
              </Button>

              <Button color="Black">
                {" "}
                <Link
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Pricing
                </Link>
              </Button>
              <Button color="Black">
                {" "}
                <Link
                  activeClass="active"
                  to="review"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Review
                </Link>
              </Button>
              <Button color="Black">
                {" "}
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Teams
                </Link>
              </Button>
              <Button color="Black">
                {" "}
                <Link
                  activeClass="active"
                  to="screenshot"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ScreenShot
                </Link>
              </Button>
              <Button color="Black">
                {" "}
                <Link
                  activeClass="active"
                  to="client"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Top Clients
                </Link>
              </Button>
              <Button color="Black">
                {" "}
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Button>
              <Button> Login</Button>
              <Button> SignUp</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Nav;
