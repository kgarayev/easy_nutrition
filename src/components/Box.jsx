import React, { Component } from "react";

class Box extends Component {
  render() {
    const { item } = this.props;

    return (
      <>
        <p>{item.name}</p>
        <p>{item.calories}</p>
      </>
    );
  }
}

export default Box;
