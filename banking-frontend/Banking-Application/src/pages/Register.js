import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage('Registration successful!');
        setIsError(false);
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.message || 'Registration failed.');
        setIsError(true);
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
      setIsError(true);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>

      {responseMessage && (
        <Alert severity={isError ? 'error' : 'success'} style={{ marginBottom: '1rem' }}>
          {responseMessage}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '1rem' }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
