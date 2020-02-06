import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const Settings = {
  ERRORS_COUNT: 4
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
