import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const errorsCount = 3;

it(`<App /> should render WelcomeScreen`, () => {
  const tree = renderer
    .create(<App
      errorsCount={errorsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
