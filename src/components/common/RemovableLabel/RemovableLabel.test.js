import React from 'react';
import ReactDOM from 'react-dom';
import RemovableLabel from "./RemovableLabel";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RemovableLabel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
