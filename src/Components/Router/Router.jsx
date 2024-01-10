// AppRoute.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BMICalculator from '../BMI/BmiCalculator';
// import Navbar from './Components/Navbar/Navbar

const AppRoute = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/BMI" exact component={BMICalculator} />

        <Footer />
      </div>
    </Router>
  );
};

export default AppRoute;
