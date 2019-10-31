import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

const MOUNT_NODE = document.getElementById("root");

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

render();