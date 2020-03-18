import React from "react";
import "./App.css";

function Bebop(nasa) {
  return (
    <div>
      <img
        src={
          "https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1261&q=80"
        }
      ></img>
      <h2>{nasa.title}</h2>
      <p>{nasa.data}</p>
      <img src={nasa.imgUrl} alt="Picture of the day"></img>
      <p>{nasa.explanation}</p>
    </div>
  );
}

export default Bebop;
