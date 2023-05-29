import React, { Component } from "react";
import foodIcon from "../assets/food-icon.png"; // Adjust the path if necessary

class Image extends Component {
  handleImageError = (e) => {
    e.target.src = foodIcon;
  };

  render() {
    const { item } = this.props;
    const imageUrl = `https://www.themealdb.com/images/ingredients/${item.name}.png`;

    return (
      <div className="imageBox">
        <img src={imageUrl} onError={this.handleImageError} alt="Image" />
      </div>
    );
  }
}

export default Image;
