// src/pages/Welcome.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Drawer, CssBaseline, Typography } from '@mui/material';

const drawerWidth = 240;

const Welcome = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Typography variant="h5">Banking App</Typography>
        </Box>
        <List>
          <ListItem button component={Link} to="/welcome/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/welcome/transactions">
            <ListItemText primary="Withdraw & Deposit" />
          </ListItem>
          <ListItem button component={Link} to="/welcome/signin">
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button component={Link} to="/welcome/register">
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: `${drawerWidth}px`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Welcome;
  