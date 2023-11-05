// Import necessary React libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className="container mt-5">
        <Routes>
            <Route path= "/React-Portfolio" element={<About/>} />
            <Route path="/React-Portfolio/about" element={<About/>} />   
            <Route path="/React-Portfolio/Portfolio" element={<Portfolio/>} />
            <Route path="/React-Portfolio/contact" element={<Contact/>} />
            {/* <Route path="/ React-Portfolio/resume" element={<Resume/>} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}     



export default App;
