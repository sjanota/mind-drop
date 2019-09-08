import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import {Auth0Context} from "../../react-auth0-wrapper";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Auth0Context.Provider value={{isAuthenticated: true}}>
      <Navbar labelFilter={["aaa"]} setLabelFilter={jest.fn()}/>
    </Auth0Context.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
