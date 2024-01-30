// import React from "react";
// import ReactDOM from "react-dom";
const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react application usign javascript "
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
