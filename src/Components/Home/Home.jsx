// Home.js
import React from 'react';
// import Navbar from './Navbar/Navbar';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
// import Hero from './Hero/Hero';
// import TeamSection from './Team/Team';
import TeamSection from '../Team/Team';
// import ContactForm from './Contact/Contact';
import ContactForm from '../Contact/Contact';
// import AboutTeam from './AboutTeam/AboutTeam';
import AboutTeam from '../AboutTeam/AboutTeam';
// import Footer from './Footer/Footer';
import Footer from '../Footer/Footer';
// import HomeRouter from './Router/Router';
// import { Switch } from 'react-router-dom'; // Import Switch directly

// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';

const Home = () => {
  return (
 
      <div>
        {/* <Navbar /> */}
      <Hero/>
        <TeamSection/>
        <ContactForm/>
        <AboutTeam/>
        <Footer/>
        {/* <HomeRouter/> */}
      </div>
   
  );
};

export default Home;
