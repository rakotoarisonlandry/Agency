import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function ServicePageSectionOne() {
  return (
    <React.Fragment>
      <Card
        sx={{
          marginBottom: 5,
          marginRight: 5,
          marginTop: 5,
          paddingY: 0,
          paddingX: 1.2,
          width:"26%",backgroundColor:"rgba(239,239,239, 0.5)"
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
            <TaskAltIcon style={{ color: "#f56ab6", border: "0px solid #e56e44", borderRadius: "0%", padding: "0px" }} />
            </Grid>
            <Grid item>
            <Typography variant="h5" component="h2" style={{fontSize:"25px" ,paddingLeft:"8px",paddingRight:"8px" ,fontWeight:"bolder"}} >
                  Smart Solutions
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
    </React.Fragment>
  );
}

export default ServicePageSectionOne;
