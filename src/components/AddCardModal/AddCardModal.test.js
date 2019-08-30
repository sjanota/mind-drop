import React from 'react';
import ReactDOM from 'react-dom';
import AddCardModal from "./AddCardModal";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCardModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
