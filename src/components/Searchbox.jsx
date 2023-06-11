import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_INPUT, NEW_API_DATA } from "../store/types";
import axios from "axios";
import { API_KEY } from "../store/config";
import { backupData } from "../store/backup";

const Searchbox = () => {
  const dispatch = useDispatch();

  // function to record and dispatch the user input into a store
  const onSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target.elements.searchInput.value;
    dispatch({ type: USER_INPUT, payload: userInput });
  };

  // function to get data from the api
  const getData = async () => {
    // only a backup data
    dispatch({ type: NEW_API_DATA, payload: backupData });

    // const userInput = useSelector((state) => state.userInput);

    // try {
    //   const { data } = await axios.get(
    //     `https://api.api-ninjas.com/v1/nutrition?query=${userInput}`,
    //     {
    //       headers: {
    //         "X-Api-Key": API_KEY,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   console.log(data);
    //   dispatch({ type: NEW_API_DATA, payload: data });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //   trigger the update of the component
  useEffect(() => {
    getData();
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
