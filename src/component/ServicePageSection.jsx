import React from "react";
import { Card, CardContent, Typography, Stack, Grid } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

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
        <Card>
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
        <Card>
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
      </Stack>
    </>
  );
}

export default ServicePageComponent;
