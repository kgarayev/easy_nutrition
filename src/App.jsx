import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Searchbox from "./components/Searchbox";
import Content from "./components/Content";

const App = () => {
  const userInput = useSelector((state) => state.userInput);

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
