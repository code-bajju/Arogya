// App.js
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TeamSection from './Components/Team/Team';
import ContactForm from './Components/Contact/Contact';
import AboutTeam from './Components/AboutTeam/AboutTeam';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import BMICalculator from './Components/BMI/BmiCalculator';
import ChatBot from './Components/ChatBot/ChatBot';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
      <Route path="bmi" element={<Hero />} />
      {/* Add more routes as needed */}
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <Navbar />
      <ChatBot/>
      {/* Add other common components here */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
