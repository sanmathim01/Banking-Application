// // src/App.js
// import React from 'react';
// import './styles.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './pages/SignIn';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Transactions from './pages/Transactions';
// import Welcome from './pages/Welcome';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Main Welcome Layout */}
//         <Route path="/welcome" element={<Welcome />}>
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="transactions" element={<Transactions />} />
//           <Route path="signin" element={<SignIn />} />
//           <Route path="register" element={<Register />} />
//         </Route>
//         {/* Default Route to Redirect to Welcome */}
//         <Route path="/" element={<Welcome />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// 
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';  // Import necessary components
import './styles.css';  

// Import your page components
import Dashboard from './pages/Dashboard';  // Page for Dashboard
import SignIn from './pages/SignIn';        // Page for Sign In
import Register from './pages/Register';    // Page for Register
import Transactions from './pages/Transactions';  // Page for Transactions
import Welcome from './pages/Welcome';      // Page for Welcome

function App() {
  return (
    <div>
      <div className="sidebar">
        {/* Links in the sidebar */}
        <Link to="/welcome">Welcome</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/register">Register</Link>
      </div>

      <div className="main-content">
        <Routes>
          {/* Define routes for the respective pages */}
          <Route path="/welcome" element={<Welcome />} />  {/* Welcome page */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
          <Route path="/transactions" element={<Transactions />} />  {/* Transactions page */}
          <Route path="/signin" element={<SignIn />} />  {/* Sign In page */}
          <Route path="/register" element={<Register />} />  {/* Register page */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

