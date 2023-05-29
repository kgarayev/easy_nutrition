import React, { Component } from "react";
import { connect } from "react-redux";

class Summary extends Component {
  // a function that iterates through array of objects and returns an object with all sums for individual entries
  summAll = (arrayOfObjects) => {
    let sumObject = { ...this.props.dictionary };

    for (let item of arrayOfObjects) {
      for (let key in item) {
        if (sumObject[key]) {
          sumObject[key].sum += item[key];
        }
      }
    }

    return sumObject;
  };

  render() {
    const totals = this.summAll(this.props.nutritionData);
    return (
      <>
        <h2>Totals</h2>
        {Object.keys(totals).map((key) => {
          return (
            <p key={key}>
              {totals[key].primary +
                ": " +
                Math.round(totals[key].sum) +
                totals[key].unit}
            </p>
          );
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    nutritionData: state.nutritionData,
    dictionary: state.dictionary,
  };
}

export default connect(mapStateToProps)(Summary);
