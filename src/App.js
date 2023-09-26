import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import Products from './components/Products';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Link to="/login"> LOGIN | </Link> 
          <Link to="/register"> SINGUP | </Link>
          <Link to="/users"> Add Product | </Link> 
          <Link to="/products"> Products | </Link> 
          <Link to="/login"> Logout </Link> 
        <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/products" element={<Products /> } />
          <Route path="/register" element={<Register /> } />
          <Route path="/users" element={<Users /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;









