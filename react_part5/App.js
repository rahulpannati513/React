import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement -> it is a object becomes html that browser can understand
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "This course is great 👍"),
  ]), //If you want to add more sibling elements, you can add them in an array
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 element"),
    React.createElement("h2", {}, "I'm an h2 element"),
  ]),
]);
// it is so much tedious to write this way, so we use JSX to write this in a more readable way and then we use babel to convert it to React.createElement
// JSX is a syntactic sugar for React.createElement
// JSX is not html, it is a javascript
// JSX is a javascript expression that gets converted to React.createElement
// JSX is a javascript expression that gets converted to React.createElement

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
