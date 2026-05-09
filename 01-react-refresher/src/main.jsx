// import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//     id: "heading",
//   },
//   "Welcome to mobile dev!",
// );

createRoot(document.getElementById("root")).render(
  // <div>
  //   <h1 className="title" id="heading">
  //     Hello World!
  //   </h1>
  // </div>,
  <App />,
);
