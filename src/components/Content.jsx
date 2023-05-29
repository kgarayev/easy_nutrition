import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { API_KEY } from "../store/config";
import Box from "./Box";

class Content extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.nutritionData !== this.props.nutritionData) {
      this.forceUpdate();
    }
  }

  render() {
    const { nutritionData } = this.props;
    // console.log(nutritionData);

    if (nutritionData) {
      return (
        <>
          {nutritionData.map((item) => {
            return <Box item={item} key={item.calories} />;
          })}
        </>
      );
    }

    return (
      <>
        <p>Loading</p>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInput: state.userInput,
    nutritionData: state.nutritionData,
  };
}

export default connect(mapStateToProps)(Content);
