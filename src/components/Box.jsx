import React, { Component } from "react";
import { connect } from "react-redux";

class Box extends Component {
  render() {
    const { item } = this.props;

    return (
      <>
        <h3>{item.name}</h3>
        <p>{item.calories}</p>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    dictionary: state.dictionary,
  };
}

export default connect(mapStateToProps)(Box);
