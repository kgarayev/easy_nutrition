import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../controllers/data";
import { saveInput, setScreenMode } from "../store/nutritionSlice";

const Searchbox = () => {
  const dispatch = useDispatch();

  // function to record and dispatch the user input into a store
  const onSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.searchInput.value;
    await getData(input);
    dispatch(setScreenMode(0));
    dispatch(saveInput(input));
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        onClick={() => {
          dispatch(setScreenMode(0));
        }}
      >
        <div className="inputBox">
          <input
            type="text"
            name="searchInput"
            className="mainInput"
            placeholder={`type food e.g. 2 eggs, fries, chicken breast`}
          />
          <button type="submit" className="submitButton">
            check
          </button>
        </div>
        {/* <p>hi</p> */}
      </form>
    </>
  );
};

// connecting to the store
export default Searchbox;
