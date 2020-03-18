import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainCard from "./MainCard";

function App() {
  return (
    <div className="App">
      <MainCard />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
