// src/pages/Transactions.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Transactions = () => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    console.log(`Withdraw: $${amount}`);
    setAmount('');
  };

  const handleDeposit = () => {
    console.log(`Deposit: $${amount}`);
    setAmount('');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Withdraw & Deposit
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
     
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleWithdraw}
        style={{ marginTop: '1rem' }}
      >
        Withdraw
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDeposit}
        style={{ marginTop: '1rem' }}
      >
        Deposit
      </Button>
    </Container>
  );
        };

export default Transactions;
       

  
  