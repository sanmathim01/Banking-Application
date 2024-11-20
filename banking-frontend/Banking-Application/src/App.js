import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; 
import './styles.css';  


import Dashboard from './pages/Dashboard';  
import SignIn from './pages/SignIn';        
import Register from './pages/Register';  
import Transactions from './pages/Transactions';  
import Welcome from './pages/Welcome';      

function App() {
  return (
    <div>
      <div className="sidebar">
        <Link to="/signin">Sign In</Link>
        <Link to="/register">Register</Link>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/welcome" element={<Welcome />} /> 
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/transactions" element={<Transactions />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;

