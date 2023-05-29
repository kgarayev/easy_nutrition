import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { NEW_API_DATA } from "./store/types";
import { API_KEY } from "./store/config";
import Searchbox from "./components/Searchbox";
import Content from "./components/Content";

class App extends Component {
  render() {
    if (this.props.userInput) {
      return (
        <>
          <Searchbox />
          <Content />
        </>
      );
    }

    return <Searchbox />;
  }
}

function mapStateToProps(state) {
  return {
    userInput: state.userInput,
  };
}

export default connect(mapStateToProps)(App);
