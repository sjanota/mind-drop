import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar labelFilter={["aaa"]} setLabelFilter={jest.fn()}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
