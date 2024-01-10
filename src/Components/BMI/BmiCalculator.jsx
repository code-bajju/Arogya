// src/components/BMICalculator.js
import React, { useState } from 'react';


const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  const getDietSuggestion = () => {
    // You can implement your diet suggestion logic based on BMI here
    // This is just a placeholder
    if (bmi < 18.5) {
      return 'You are underweight. Please consider increasing your calorie intake.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'You have a normal BMI. Maintain a balanced diet for good health.';
    } else {
      return 'You are overweight. Consider reducing your calorie intake and increasing physical activity.';
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">BMI Calculator</h1>
      <div className="flex items-center mb-4">
        <label className="mr-2">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2"
        />
      </div>
      <button onClick={calculateBMI} className="bg-blue-500 text-white p-2">
        Calculate BMI
      </button>
      {bmi !== null && (
        <div className="mt-4">
          <p>Your BMI: {bmi}</p>
          <p>{getDietSuggestion()}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
