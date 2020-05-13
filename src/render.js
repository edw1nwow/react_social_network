import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addMessage,
  areaMessage,
  areaPost,
  addPost,
  renderEntireTree,
} from "./Components/Redux/State";

import { BrowserRouter } from "react-router-dom";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        areaPost={areaPost}
        messageNew={addMessage}
        areaMessage={areaMessage}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
