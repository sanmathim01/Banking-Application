// src/pages/SignIn.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const SignIn = () => (
  <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Sign In
    </Typography>
    <TextField fullWidth margin="normal" label="Email" variant="outlined" />
    <TextField fullWidth margin="normal" label="Password" variant="outlined" type="password" />
    <Button fullWidth variant="contained" color="primary" style={{ marginTop: '1rem' }}>
      Sign In
    </Button>
  </Container>
);

export default SignIn;
