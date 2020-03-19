import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainCard from "./MainCard";
import Header from "./Header";
const App = () => {
  return (
    <div className="App">
      <MainCard />
    </div>
  );
};

export default App;
