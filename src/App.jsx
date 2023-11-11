// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import "./styles/SignUp.css";
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home />} element={<Home />} />
          <Route path='/signUp' exact component={<SignUp />} element={<SignUp />} />
          <Route path='/menu' exact component={<Menu />} element={<Menu />} />
          <Route path='/about' exact component={<About />} element={<About />} />
          <Route path='/contact' exact component={<Contact />} element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
