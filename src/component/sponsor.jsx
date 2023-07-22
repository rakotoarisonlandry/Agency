import { Stack } from "@mui/system";
import { Box } from "@mui/material";
import React from "react";
import Google from "../assets/image/Google.png";
import Netflix from "../assets/image/netflix.png";
import Slack from "../assets/image/Slack.png";
import Amazon from "../assets/image/Amazon.png";

function Sponsor() {
  return (
    <React.Fragment>
      <Stack direction="row" justifyContent="center" alignItems="center" paddingLeft="100px">
        <Box sx={{ marginRight: 20, display: "flex", alignItems: "center" }}>
          <a href="https://www.google.com/"><img src={Google} alt="Google" style={{ width: "120px" }} /></a>
        </Box>
        <Box sx={{ marginRight: 20, display: "flex", alignItems: "center" }}>
          <a href="https://www.netflix.com/"><img src={Netflix} alt="Netflix" style={{ width: "120px" }} /></a>
        </Box>
        <Box sx={{ marginRight: 20, display: "flex", alignItems: "center" }}>
          <a href="https://slack.com/"><img src={Slack} alt="Slack" style={{ width: "120px" }} /></a>
        </Box>
        <Box sx={{ marginRight: 20, display: "flex", alignItems: "center" }}>
          <a href="https://www.amazon.fr/"><img src={Amazon} alt="Amazon" style={{ width: "120px" }} /></a>
        </Box>
      </Stack>
    </React.Fragment>
  );
}

export default Sponsor;

