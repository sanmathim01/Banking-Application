import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Use for navigation after successful login

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [balance, setBalance] = useState(null);  // State to store balance
  const navigate = useNavigate();  // Use this hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/users/login?email=${formData.email}&password=${formData.password}`,
        {
          method: 'POST',
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(`Welcome, ${data.name}!`);
        setIsError(false);
        setBalance(data.balance); 

        
        navigate('/transactions');
      } else {
        setResponseMessage('Invalid email or password.');
        setIsError(true);
      }
    } catch (error) {
      setResponseMessage('An error occurred');
      setIsError(true);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
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
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;

