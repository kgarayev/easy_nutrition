import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { NEW_API_DATA } from "./store/types";
import { API_KEY } from "./store/config";
import Searchbox from "./components/Searchbox";

class App extends Component {
  render() {
    return <Searchbox />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
