// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TeamSection from './Components/Team/Team';
import ContactForm from './Components/Contact/Contact';
import AboutTeam from './Components/AboutTeam/AboutTeam';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
// import AppRouter from './Components/Router/Router';
// import { Switch } from 'react-router-dom'; // Import Switch directly

// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';

const App = () => {
  return (
   
    <Router>
       <Home/>
      <div>
       
        {/* <AppRouter/> */}
      </div>
    </Router>
  );
};

export default App;
