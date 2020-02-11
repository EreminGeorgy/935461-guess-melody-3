import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const settings = {
  errorsCount: 3 // А это точно не глобальная константа?
};

ReactDOM.render(
    <App
      errorsCount={settings.errorsCount}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
