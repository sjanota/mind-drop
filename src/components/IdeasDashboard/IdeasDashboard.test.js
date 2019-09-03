import React from 'react';
import IdeasDashboard from './IdeasDashboard';
import renderer from "react-test-renderer";

it('matches snapshot', () => {
  const tree = renderer
    .create(<IdeasDashboard labelFilter={"label1"}/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
