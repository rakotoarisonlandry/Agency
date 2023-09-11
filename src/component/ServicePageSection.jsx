import React from "react";
import { Card, CardContent, Typography, Stack, Grid } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ServicePageSectionTwo from "./servicePageSectionTwo";

function ServicePageComponent() {
  const options = [
    {
      id: "1",
      texteHeader: " Free Support 24 Hours",
      text: "Lorem ipsum dolor",
    },
    {
      id: "2",
      texteHeader: " Free Support 24 Hours",
      text: "Lorem ipsum dolor",
    },
    {
      id: "3",
      texteHeader: " Free Support 24 Hours",
      text: "Lorem ipsum dolor",
    },
    {
      id: "4",
      texteHeader: " Free Support 24 Hours",
      text: "Lorem ipsum dolor",
    },
  ];
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
        {options?.map((opt) => (
          <Card
          
            sx={{
              marginBottom: 10,
              marginRight: 5,
              marginTop: 5,
              paddingY: 0,
              width: "26%",
              backgroundColor: "rgba(239,239,239, 0.5)",
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                
              >
                <Grid item key={opt.id}>
                  <TaskAltIcon
                    style={{
                      color: "#f56ab6",
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
                    {opt.texteHeader}
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
                    {opt.text}
                  </Typography>
                </Grid>
                <Grid item>
                  <TaskAltIcon />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
        <ServicePageSectionTwo/>
      </Stack>
    </>
  );
}

export default ServicePageComponent;
