import { VpnLock } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import IllustrationForm from "../assets/image/Home_C.gif";
import Validation from "./formValidation";

function Form() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={15} // Adjust the spacing as needed
        paddingTop="150px"
        width="100%"
      >
        <div style={{ width: "480px" }}>
          <img
            src={IllustrationForm}
            alt="Illustration"
            width="100%"
            height="auto"
          />
        </div>
        <div style={{ width: "500px" }}>
          <Validation />
        </div>
      </Stack>
    </React.Fragment>
  );
}

export default Form;
