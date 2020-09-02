import React from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import { grey } from "@material-ui/core/colors";
import { Client } from "../data";

const TopClients = () => {
  return (
    <Box id="client">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: 50 }}
      >
        <Typography variant="h2">Our Top Clients</Typography>
      </Box>

      <Grid container justify="center" spacing={1}>
        {Client.map((item, index) => {
          return (
            <Grid
              key="index"
              item
              container
              xs={2}
              style={{ padding: 10, marginTop: 10 }}
            >
              <Card
                style={{
                  height: 180,
                  width: "100%",
                  backgroundColor: grey[200],
                }}
              >
                <img
                  src={item.image}
                  style={{
                    padding: 10,

                    width: "100%",
                    height: "100%",
                  }}
                ></img>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopClients;
