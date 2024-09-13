import React, { useState } from 'react';
import './CalorieCalculator.css'; 
import GymPhotos from './GymPhotos'; 

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [goal, setGoal] = useState('maintenance');
  const [error, setError] = useState('');

  const calculateCaloriesAndProtein = () => {
    if (!age || !weight || !height) {
      setError('All fields are required!');
      return;
    }

    setError('');

    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseFloat(age);

    let bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears;
    bmr += 5; // For men; for women, use -161 instead

    let maintenanceCalories = bmr * parseFloat(activityLevel);

    if (goal === 'loss') {
      maintenanceCalories -= 500;
    } else if (goal === 'gain') {
      maintenanceCalories += 500;
    }

    const calories = maintenanceCalories.toFixed(0);

    let proteinIntake;
    if (goal === 'loss') {
      proteinIntake = weightInKg * 1.5;
    } else if (goal === 'gain') {
      proteinIntake = weightInKg * 2.0;
    } else {
      proteinIntake = weightInKg * 1.2;
    }

    const protein = proteinIntake.toFixed(0);

    alert(`Daily Caloric Needs: ${calories} kcal\nDaily Protein Needs: ${protein} grams`);
  };

  return (
    <div className="page-container">
      <div className="background-overlay">
        <GymPhotos />
      </div>
      <div className="calculator-container">
        <h1>Calorie & Protein Calculator</h1>
        {error && <p className="error-message">{error}</p>}

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            required
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
            required
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
            required
          />
        </div>
        <div>
          <label>Activity Level:</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
            <option value="1.9">Super active (very hard exercise/sports & physical job)</option>
          </select>
        </div>
        <div>
          <label>Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="maintenance">Maintenance</option>
            <option value="loss">Weight Loss</option>
            <option value="gain">Muscle Gain</option>
          </select>
        </div>
        <button onClick={calculateCaloriesAndProtein}>Calculate</button>
        <footer className="footer">
          <p>Created By HMAMA Youssef</p>
        </footer>
      </div>
    </div>
  );
};

export default CalorieCalculator;
