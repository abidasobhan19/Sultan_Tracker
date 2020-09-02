import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
import { Review } from "../data";

export default class Fag extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Box id="review" style={{ padding: 10, marginTop: 50 }}>
        <Box>
          <Typography style={{ textAlign: "center" }} variant="h4">
            Customer Reviews
          </Typography>
        </Box>

        <div
          style={{
            width: "100%",
            height: 300,
            overflow: "hidden",
            marginTop: 10,
            backgroundColor: grey[200],
          }}
        >
          <Slider {...settings}>
            {Review.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    width: "100%",
                    marginTop: 20,
                  }}
                >
                  <Box display="flex" justifyContent="center">
                    <Card style={{ maxWidth: 500, maxHeight: 300 }}>
                      <Box style={{ marginTop: 10 }}>
                        <img
                          src={item.image}
                          style={{
                            marginTop: 10,
                            marginLeft: 10,
                            borderRadius: 10,
                          }}
                        />
                      </Box>

                      <CardHeader title={item.name} subheader={item.date} />

                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.review}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>
    );
  }
}
