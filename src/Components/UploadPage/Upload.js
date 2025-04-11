import { useState } from "react";
import './Upload.css'
const Upload = () => {
  const [image, setImage] = useState(null);
  const [foodDetails, setFoodDetails] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      // Dummy food details (replace with API response later)
      setFoodDetails({
        name: "Paneer Pulao",
        calories: "Calories: 350 kcal",
        protein: "Protein: 30g",
        fats: "Fats: 12g",
        carbs: "Carbs: 20g",
      });
    }
  };

  return (
    <div className="go">
       <img src='/images_used/covering.jpg'></img>
    <div className="container2">
      <h1 className="welcome-text">Welcome to NutriTrack</h1>

      <div className="radius-shape-3"></div>
      <div className="radius-shape-4"></div>
      
      <h1 className="title">Know Your Food Health!</h1>
      <p className="description">
        Upload an image of your food and get detailed nutrition insights.
      </p>

      <label className="upload-box">
        <svg
          className="upload-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill="gray"
        >
          <path d="M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2m0-2a12 12 0 1 0 8.49 3.51A12 12 0 0 0 12 0zm-2 14v4h4v-4h3l-5-5-5 5h3z"></path>
        </svg>
        <span className="upload-text">Upload Your Food Image</span>
        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </label>

      {image && foodDetails && (
        <div id="imageContainer" className="image-container">
          <img src={image} alt="Uploaded food" className="uploaded-image" />
          <div className="food-details">
            <h2>Your Food Details!</h2>
            <h3 className="food-name">{foodDetails.name}</h3>
            <p className="food-info">{foodDetails.calories}</p>
            <p className="food-info">{foodDetails.protein}</p>
            <p className="food-info">{foodDetails.fats}</p>
            <p className="food-info">{foodDetails.carbs}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Upload;
