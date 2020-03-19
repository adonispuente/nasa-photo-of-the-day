import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Bebop from "./Bebop";
import Headers from "./Header";
function MainCard() {
  const [nasa, setNasa] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Uqb7Xj3AUngMG9kUuUIM5iNlQ1wcvsXPEfuzrA6b"
      )
      .then(response => {
        console.log("data im getting from api", response.data);

        setNasa(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);
  return (
    <div>
      {/* <Headers /> */}
      <Bebop
        date={nasa.date}
        explanation={nasa.explanation}
        imgUrl={nasa.hdurl}
        title={nasa.title}
      />
    </div>
  );
}

export default MainCard;
