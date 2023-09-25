import { Stack } from "@mui/material";
import React from "react";
import IllustrationForm from "../assets/image/process.svg";
import Validation from "./formValidation";
import { motion } from "framer-motion";

function Form() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={40} // Adjust the spacing as needed
        paddingTop="200px"
        width="100%"
      >
        <div style={{ width: "550px" }}>
          <img
            src={IllustrationForm}
            alt="Illustration"
            width="200%"
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
