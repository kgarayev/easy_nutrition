import React, { Component } from "react";
import { connect } from "react-redux";
import { USER_INPUT } from "../store/types";

class Searchbox extends Component {
  // function to record and dispatch the user input into a store
  onSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.searchInput.value;
    this.props.dispatch({ type: USER_INPUT, payload: userInput });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="searchInput" />
          <button type="submit">find out</button>
        </form>
      </>
    );
  }
}

// connecting to the store
export default connect()(Searchbox);
