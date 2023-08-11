import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function ServicePageSectionOne() {
  return (
    <React.Fragment>
      <Card sx={{ marginBottom: 5, marginRight: 5, marginTop: 5 ,paddingY:0,paddingX:1.2 }}>
        <CardContent>
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
              <Typography variant="h4" component="h2">
                Great Idea Business 
              </Typography>
              <Typography variant="h5" component="h2">
                lorem ipsum dolor
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

export default ServicePageSectionOne;
