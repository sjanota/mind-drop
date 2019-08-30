import React from 'react';
import ReactDOM from 'react-dom';
import AddCardCard from "./AddCardCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCardCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
