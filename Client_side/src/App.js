import React from 'react';
import './App.css';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Home/Navbar/Navbar';
import Navbar1 from './components/Home/Navbar/Navbar1';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Explore from './components/Explore/Explore';
import BookingForm from './components/BookingPage/BookingForm';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/Home/ForgotPassword/ForgotPassword';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Services />
      <Explore />
      <BookingForm />
      <Login />
      <Signup />
      <ForgotPassword />
    </div>
  );
}

export default App;
