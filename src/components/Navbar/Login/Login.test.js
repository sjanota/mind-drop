import React from 'react';
import renderer from 'react-test-renderer';
import Login from "./Login";
import {Auth0Context} from "../../../react-auth0-wrapper";

it('renders without crashing', () => {
  const tree = renderer
    .create(<Auth0Context.Provider value={{isAuthenticated: true}}><Login/></Auth0Context.Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
