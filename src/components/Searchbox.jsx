import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_INPUT } from "../store/types";
import { getData } from "../controllers/data";

const Searchbox = () => {
  const dispatch = useDispatch();
  const userInput = useSelector((store) => store.userInput);

  // function to record and dispatch the user input into a store
  const onSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target.elements.searchInput.value;
    dispatch({ type: USER_INPUT, payload: userInput });
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
