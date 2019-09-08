import React from 'react';
import renderer from 'react-test-renderer';
import PrivateRoute from "./PrivateRoute";

it('renders without crashing', () => {
  const tree = renderer
    .create(<PrivateRoute/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
