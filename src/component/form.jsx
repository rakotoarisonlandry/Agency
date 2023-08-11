import { Stack } from "@mui/material";
import React from "react";
import IllustrationForm from "../assets/image/Home_C.gif";

function Form() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="center"
        spacing="220px"
        marginTop="100px"
      >
        <div style={{ marginTop: "50px" }}>
          <img
            src={IllustrationForm}
            alt="Illustration"
            width="500px"
            height="500px"
          />
        </div>
      </Stack>
    </React.Fragment>
  );
}

export default Form;
