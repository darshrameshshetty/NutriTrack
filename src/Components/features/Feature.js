import React from 'react';
import './Feature.css';

const Feature = () => {
  const features = [
    {
      icon: "👔",
      title: "AI Model",
      description: "This project uses the machine learning model to predict the results."
    },
    {
      icon: "🍽️",
      title: "Indian Food",
      description: "Data trained to have Indian food with various nutritional benefits."
    },
    {
      icon: "🛒",
      title: "Quantity Estimation",
      description: "Our innovative deep learning model analyzes the quantity based on results."
    },
    {
      icon: "🎧",
      title: "Diet Recommendation",
      description: "This project recommends personalized diet plans with customized dishes."
    }
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;
