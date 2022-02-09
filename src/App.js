import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { ContactForm1 } from './components/ContactForm1';
import { ContactForm2 } from './components/ContactForm2';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { AfterSubmit } from './components/AfterSubmit';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/form-1" element={<ContactForm1 />} />
            <Route path="/form-2" element={<ContactForm2 />} />
            <Route path="/after" element={<AfterSubmit />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;