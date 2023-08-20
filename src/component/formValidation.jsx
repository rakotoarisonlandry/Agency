import React, { useState } from "react";
import {
  TextField,
  Button,
  TextareaAutosize,
  Snackbar,
  Typography,
} from "@mui/material";
import { Alert } from "@mui/lab";
import "../assets/styles/app.css";

function Validation() {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    if (!textInput1 || !textInput2 || !textareaValue || !textInput3) {
      setShowWarning(true);
      setShowSuccess(false);
      setTimeout(() => {
        setShowWarning(false);
      }, 5000); // Cacher le message après 5 secondes
    } else {
      setShowWarning(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // Cacher le message après 5 secondes

      // Faire quelque chose avec les données du formulaire ici

      // Réinitialiser les champs après la soumission
      setTextInput1("");
      setTextInput2("");
      setTextInput3("");
      setTextareaValue("");
    }
  };

  return (
    <div
      className="blur-background"
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      <div className="form-container">
        <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            fontSize: "45px",
            paddingBottom: "15px",
            background: "linear-gradient(43deg, #e0559e, #4842c8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingRight: "10px",
          }}
        >
          Get in Touch
        </Typography>
        <p style={{ opacity: "0.5", fontSize: "13px", paddingBottom: "15px" }}>
          If you have any questions or feedback, please don't hesitate to reach
          out to us using the form below. We'd love to hear from you!
        </p>
        <div style={{ display: "flex", gap: "16px", paddingBottom: "3px" }}>
          <TextField
            label="Name*"
            value={textInput1}
            onChange={(e) => setTextInput1(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="First Name*"
            value={textInput2}
            onChange={(e) => setTextInput2(e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
        <TextField
          label="Email*"
          value={textInput3}
          onChange={(e) => setTextInput3(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextareaAutosize
          minRows={3}
          placeholder="Give your suggestion*"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          style={{
            width: "100%",
            marginTop: "16px",
            padding: "8px",
            backgroundColor: "#edf5f6",
            border: "2px solid #b5bcbc",
            borderRadius: "4px",
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            marginTop: "15px",
            paddingTop: "9px",
            paddingBottom: "9px",
            paddingLeft: "25px",
            paddingRight: "25px",
            background: "linear-gradient(43deg, #e0559e, #4842c8)",
            fontWeight: "bold",
          }}
        >
          Submit
        </Button>
        {showWarning && (
          <Alert severity="warning" style={{ marginTop: "16px" }}>
            Please fill out all the fields in the form.
          </Alert>
        )}
        {showSuccess && (
          <Alert severity="success" style={{ marginTop: "16px" }}>
            Form submitted successfully!
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Validation;
