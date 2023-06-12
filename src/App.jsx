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
  selectLoading,
} from "./store/nutritionSlice";

const App = () => {
  const userInput = useSelector(selectUserInput);
  const screenMode = useSelector(selectScreenMode);
  const loading = useSelector(selectLoading);
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
        <div>
          <Searchbox />
          <p onClick={mainClick}>Main</p>
          <p onClick={favouriteClick}>Favourites</p>
          {screenMode === 0 && <Content />}
          {loading && <p>Loading...</p>}
          {screenMode === 1 && <Favourites />}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Searchbox />
        <p onClick={mainClick}>Main</p>
        <p onClick={favouriteClick}>Favourites</p>
        {loading && <p>Loading...</p>}
        {screenMode === 1 && <Favourites />}
      </div>
    </>
  );
};

export default App;
