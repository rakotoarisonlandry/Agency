import React from "react";
import { Card, CardContent, Typography, Stack, Grid } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function ServicePageSectionTwo() {
  return (
    <React.Fragment>
      <Card
        sx={{
          marginBottom: 10,
          marginRight: 5,
          marginTop: 5,
          paddingY: 0,
          paddingX: 1.2,
          width: "26%",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <TaskAltIcon
                style={{
                  color: "#3ee34e",
                  border: "0px solid #e56e44",
                  borderRadius: "0%",
                  padding: "0px",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                component="h2"
                style={{
                  fontSize: "25px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  fontWeight: "bolder",
                }}
              >
                Business Analysis
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                style={{ fontSize: "17px", paddingLeft: "8px", opacity: "0.7" }}
              >
                Lorem ipsum dolor
              </Typography>
            </Grid>
            <Grid item>
              <TaskAltIcon />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default ServicePageSectionTwo;
