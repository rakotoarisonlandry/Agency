import React from "react";
import { Card, CardContent, Typography, Stack, Grid } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ServicePageSectionTwo from "./servicePageSectionTwo";

function ServicePageComponent() {
  return (
    <>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Card sx={{ marginBottom: 10 ,marginRight: 5 ,marginTop:5,paddingY:0,paddingX:1.2}}>
          <CardContent >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <TaskAltIcon />
              </Grid>
              <Grid item>
              <Typography variant="h5" component="h2" style={{fontSize:"25px" ,paddingLeft:"8px",paddingRight:"8px" ,fontWeight:"bolder"}} >
                  Create Idea Business
                </Typography>
                <Typography variant="h6" component="h8" style={{fontSize:"17px" ,paddingLeft:"8px" ,opacity:"0.7"}}>
                  Lorem ipsum dolor
                </Typography>
              </Grid>
              <Grid item>
                <TaskAltIcon />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <ServicePageSectionTwo/>
      </Stack>
    </>
  );
}

export default ServicePageComponent;
