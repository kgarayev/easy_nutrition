import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../controllers/data";
import { saveInput, selectUserInput } from "../store/nutritionSlice";

const Searchbox = () => {
  const dispatch = useDispatch();
  const userInput = useSelector(selectUserInput);

  // function to record and dispatch the user input into a store
  const onSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.searchInput.value;
    dispatch(saveInput(input));
  };

  //   trigger the update of the component
  useEffect(() => {
    getData(userInput);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="searchInput" />
        <button type="submit">find out</button>
      </form>
    </>
  );
};

// connecting to the store
export default Searchbox;
