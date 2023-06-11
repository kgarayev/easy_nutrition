import React from "react";
import foodIcon from "../assets/food-icon.png"; // Adjust the path if necessary

const Image = (props) => {
  const handleImageError = (e) => {
    e.target.src = foodIcon;
  };

  const { item } = props;
  const imageUrl = `https://www.themealdb.com/images/ingredients/${item.name}.png`;

  return (
    <div className="imageBox">
      <img src={imageUrl} onError={handleImageError} alt="Image" />
    </div>
  );
};

export default Image;
