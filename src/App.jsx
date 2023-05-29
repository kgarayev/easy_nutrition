import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { NEW_API_DATA } from "./store/types";
import { API_KEY } from "./store/config";

class App extends Component {
  render() {
    return <h1>Hi</h1>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
