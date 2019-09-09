import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from "./ListItem";

it('renders without crashing', () => {
  const tree = renderer
    .create(<ListItem/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
