import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Context} from "../../react-auth0-wrapper";
import {MemoryRouter as Router} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Auth0Context.Provider
    value={{isAuthenticated: true}}><App/></Auth0Context.Provider></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
