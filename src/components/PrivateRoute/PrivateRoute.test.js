import React from 'react';
import renderer from 'react-test-renderer';
import PrivateRoute from "./PrivateRoute";
import {Auth0Context} from "../../react-auth0-wrapper";
import {MemoryRouter as Router} from 'react-router-dom'

it('renders without crashing', () => {
  const tree = renderer
    .create(<Router><Auth0Context.Provider value={{isAuthenticated: true}}><PrivateRoute component={"div"}/></Auth0Context.Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
