import React from "react";
import { Card, CardContent, Typography, Stack, Grid } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ServicePageSectionOne from "./ServicePageSectionOne";
import ServicePageSectionTwo from "./servicePageSectionTwo";

function ServicePage() {
  return (
    <React.Fragment>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        marginTop="35px"
        alignItems="center"
        justifyContent="center"
      >
        <Card
          className="dark:bg-[#1c4e71]  dark:text-gray-100"
          sx={{
            marginBottom: 5,
            marginRight: 5,
            marginTop: 5,
            paddingY: 0,
            paddingX: 1.2,
            width: "24%",
            backgroundColor: "rgba(239,239,239, 0.5)",
          }}
        >
          <CardContent >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <TaskAltIcon
                  style={{
                    color: "#e56e44",
                    border: "0px solid #e56e44",
                    borderRadius: "0%",
                    padding: "0px",
                  }}
                />
              </Grid>
              <Grid item >
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
                   Free Support 24 Hours
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{
                    fontSize: "17px",
                    paddingLeft: "8px",
                    opacity: "0.7",
                  }}
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

        <ServicePageSectionOne />
      </Stack>
      {/* <ServicePageSectionTwo /> */}
    </React.Fragment>
  );
}

export default ServicePage;
