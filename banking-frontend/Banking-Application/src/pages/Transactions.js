import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Transactions = () => {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);  // Add a balance state

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    if (withdrawAmount > balance) {
      alert('Insufficient funds.');
      return;
    }

    const newBalance = balance - withdrawAmount;
    setBalance(newBalance);  
    setAmount('');  
  };

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const newBalance = balance + depositAmount;
    setBalance(newBalance);  
    setAmount(''); 
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Withdraw & Deposit
      </Typography>

      {/* Display current balance */}
      <Typography variant="h6" align="center" gutterBottom>
        Current Balance: Rs. {balance.toFixed(2)}
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
        color="primary"
        onClick={handleWithdraw}
        style={{ marginTop: '1rem' }}
      >
        Withdraw
      </Button>
      <Button
        fullWidth
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


