import React, { Component } from "react";
import { connect } from "react-redux";
import { USER_INPUT, NEW_API_DATA } from "../store/types";
import axios from "axios";
import { API_KEY } from "../store/config";
import { backupData } from "../store/backup";

class Searchbox extends Component {
  // function to record and dispatch the user input into a store
  onSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target.elements.searchInput.value;
    this.props.dispatch({ type: USER_INPUT, payload: userInput });
  };

  // function to get data from the api
  getData = async () => {
    // only a backup data
    this.props.dispatch({ type: NEW_API_DATA, payload: backupData });

    // const { userInput } = this.props;

    // try {
    //   const { data } = await axios.get(
    //     `https://api.api-ninjas.com/v1/nutrition?query=${userInput}`,
    //     {
    //       headers: {
    //         "X-Api-Key": API_KEY,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   console.log(data);
    //   this.props.dispatch({ type: NEW_API_DATA, payload: data });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //   trigger the update of the component
  componentDidUpdate(prevProps) {
    if (prevProps.userInput !== this.props.userInput) {
      this.getData();
    }
  }

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

function mapStateToProps(state) {
  return {
    userInput: state.userInput,
  };
}

// connecting to the store
export default connect(mapStateToProps)(Searchbox);
