import React from "react";
import { Card, CardContent, Typography, Stack, Grid } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function ServicePage() {
  return (
    <React.Fragment>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems="center" justifyContent="center">
        <Card>
          <CardContent>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <TaskAltIcon />
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h2">
                  Texte 1
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
            <Typography variant="h5" component="h2">
              Item 2
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems="center" justifyContent="center">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Item 3
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Item 4
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </React.Fragment>
  );
}

export default ServicePage;
