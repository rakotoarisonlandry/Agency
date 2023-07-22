import React from "react";
import { Box, Stack } from "@mui/material";

function ServicePage() {
  return (
    <React.Fragment>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems="center" justifyContent="center">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems="center" justifyContent="center">
        <Box>Item 3</Box>
        <Box>Item 4</Box>
      </Stack>
    </React.Fragment>
  );
}

export default ServicePage;
