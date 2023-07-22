import React from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";

function ServicePage() {
  return (
    <React.Fragment>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems="center" justifyContent="center">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Item 1
            </Typography>
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
