import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "./Image";

class Box extends Component {
  render() {
    const { item, dictionary } = this.props;

    return (
      <>
        <h3>{item.name}</h3>

        <Image item={item} />

        {Object.keys(dictionary).map((key) => {
          return (
            <div key={Math.floor(Math.random() * 10000)}>
              {dictionary[key].primary +
                ": " +
                item[key] +
                " " +
                dictionary[key].unit}
            </div>
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
