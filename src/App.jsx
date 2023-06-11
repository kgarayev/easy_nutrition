import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Searchbox from "./components/Searchbox";
import Content from "./components/Content";
import { selectUserInput } from "./store/nutritionSlice";

const App = () => {
  const userInput = useSelector(selectUserInput);

  if (userInput) {
    return (
      <>
        <Searchbox />
        <Content />
      </>
    );
  }

  return <Searchbox />;
};

export default App;
