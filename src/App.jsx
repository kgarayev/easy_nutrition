import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Searchbox from "./components/Searchbox";
import Content from "./components/Content";
import Favourites from "./components/Favourites";
import {
  selectUserInput,
  setScreenMode,
  selectScreenMode,
} from "./store/nutritionSlice";

const App = () => {
  const userInput = useSelector(selectUserInput);
  const screenMode = useSelector(selectScreenMode);
  const dispatch = useDispatch();

  const favouriteClick = () => {
    dispatch(setScreenMode(1));
  };

  const mainClick = () => {
    dispatch(setScreenMode(0));
  };

  if (userInput) {
    return (
      <>
        <Searchbox />
        <p onClick={mainClick}>Main</p>
        <p onClick={favouriteClick}>Favourites</p>
        {screenMode === 0 && <Content />}
        {screenMode === 1 && <Favourites />}
      </>
    );
  }

  return (
    <>
      <Searchbox />
      <p onClick={mainClick}>Main</p>
      <p onClick={favouriteClick}>Favourites</p>
      {screenMode === 1 && <Favourites />}
    </>
  );
};

export default App;
