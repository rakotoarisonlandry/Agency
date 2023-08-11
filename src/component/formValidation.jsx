import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize, Snackbar } from '@mui/material';
import { Alert } from '@mui/lab';

function Validation() {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
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
    <div>
      <TextField
        label="Champ 1"
        value={textInput1}
        onChange={(e) => setTextInput1(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Champ 2"
        value={textInput2}
        onChange={(e) => setTextInput2(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextareaAutosize
        minRows={3}
        placeholder="Textarea"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        style={{ width: '100%', marginTop: '16px', padding: '8px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
        Soumettre
      </Button>
      {showWarning && (
        <Alert severity="warning" style={{ marginTop: '16px' }}>
          Veuillez remplir tous les champs du formulaire.
        </Alert>
      )}
    </div>
  );
}

export default Validation;
