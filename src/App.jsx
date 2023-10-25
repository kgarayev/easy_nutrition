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
  saveInput,
} from "./store/nutritionSlice";

const App = () => {
  const userInput = useSelector(selectUserInput);
  const screenMode = useSelector(selectScreenMode);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  // when a star is clicked change screen mode
  const favouriteClick = () => {
    dispatch(setScreenMode(1));
  };

  // when main menu item is clicked change screen mode
  const mainClick = () => {
    dispatch(setScreenMode(0));
  };

  console.log("check");

  // condiitonal rendering
  if (userInput) {
    return (
      <>
        <div
          className="heading"
          onClick={() => {
            dispatch(saveInput(""));
          }}
        >
          <div className="headingEasy">
            <h1>Easy</h1>
          </div>
          <div className="headingNutrition">
            <h1>Nutrition</h1>
          </div>
        </div>

        <div className="container">
          <Searchbox />

          <div className="menu">
            <div>
              <h2 onClick={mainClick}>main</h2>
            </div>

            <div>
              <h2 onClick={favouriteClick}>favourites</h2>
            </div>

            <div>
              <h2
                onClick={() => {
                  dispatch(saveInput(""));
                  dispatch(setScreenMode(0));
                }}
              >
                reset
              </h2>
            </div>
          </div>

          {screenMode === 0 && <Content />}
          {loading && <p>Loading...</p>}
          {screenMode === 1 && <Favourites />}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="heading">
        <div className="headingEasy">
          <h1>Easy</h1>
        </div>
        <div className="headingNutrition">
          <h1>Nutrition</h1>
        </div>
      </div>

      <div className="container">
        <Searchbox />

        <div className="menu">
          <div>
            <h2 onClick={mainClick}>main</h2>
          </div>

          <div>
            <h2 onClick={favouriteClick}>favourites</h2>
          </div>

          <div>
            <h2
              onClick={() => {
                dispatch(saveInput(""));
              }}
            >
              reset
            </h2>
          </div>
        </div>

        {loading && <p>Loading...</p>}
        {screenMode === 1 && <Favourites />}
      </div>
    </>
  );
};

export default App;
