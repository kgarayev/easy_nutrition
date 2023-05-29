import React, { Component } from "react";
import { connect } from "react-redux";

class Box extends Component {
  render() {
    const { item, dictionary } = this.props;

    return (
      <>
        <h3>{item.name}</h3>
        {Object.keys(dictionary).map((key) => {
          return (
            <p>
              {dictionary[key].primary +
                ": " +
                item[key] +
                " " +
                dictionary[key].unit}
            </p>
          );
        })}
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
