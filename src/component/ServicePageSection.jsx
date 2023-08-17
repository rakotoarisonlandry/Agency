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
        <Card sx={{ marginBottom: 10 ,marginRight: 5 ,marginTop:5,paddingY:0,width:"26%",}}>
          <CardContent >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
              <TaskAltIcon style={{ color: "#f56ab6", border: "0px solid #e56e44", borderRadius: "0%", padding: "0px"}} />
              </Grid>
              <Grid item>
              <Typography variant="h5" component="h2" style={{fontSize:"25px" ,paddingLeft:"8px",paddingRight:"8px" ,fontWeight:"bolder" }} >
                 Free Support 24 Hours
                </Typography>
                <Typography variant="h6" component="h6" style={{fontSize:"17px" ,paddingLeft:"8px" ,opacity:"0.7"}}>
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
