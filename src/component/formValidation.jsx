import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize, Snackbar, Typography } from '@mui/material';
import { Alert } from '@mui/lab';

function Validation() {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (!textInput1 || !textInput2 || !textareaValue) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      // Faire quelque chose avec les données du formulaire ici
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h2">Get in Touch</Typography>
      <p>If you have any questions or feedback, please don't hesitate to reach out to us using the form below. We'd love to hear from you!</p>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <TextField
          label=" Name"
          value={textInput1}
          onChange={(e) => setTextInput1(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="first name"
          value={textInput2}
          onChange={(e) => setTextInput2(e.target.value)}
          fullWidth
          margin="normal"
        />
      </div>
      <TextField
        label="mail"
        value={textInput3}
        onChange={(e) => setTextInput3(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextareaAutosize
        minRows={3}
        placeholder="Give your suggestion"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        style={{ width: '100%', marginTop: '16px', padding: '8px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
        Submit
      </Button>
      {showWarning && (
        <Alert severity="warning" style={{ marginTop: '16px' }}>
          Please fill out all the fields in the form.
        </Alert>
      )}
    </div>
  );
}

export default Validation;
