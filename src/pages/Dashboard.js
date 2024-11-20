// src/pages/Dashboard.js
import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Dashboard = () => (
  <Container style={{ marginTop: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Account Balance</Typography>
            <Typography variant="h5">$5,000</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Recent Transactions</Typography>
            <Typography variant="body1">- Withdrawal: $200</Typography>
            <Typography variant="body1">+ Deposit: $500</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default Dashboard;
