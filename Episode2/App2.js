import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement creates an object which is called a React Element not a HTML element
//React.createElement=>object=>HTML element (rendered using ReactDOM);
const heading=React.createElement("h1",{},"Namaste React 🚀");
//JSX(transpiled before it reaches the js)->parcel->babel->converts to code that js engine understand
//JSX->calls React.createElement()->creates an object which is called a React Element not a HTML element
const heading2=<h1>Hello jsx react</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);