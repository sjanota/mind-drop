import React from 'react';
import ReactDOM from 'react-dom';
import CardCard from "./CardCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
