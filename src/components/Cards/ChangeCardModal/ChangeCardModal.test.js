import React from 'react';
import ReactDOM from 'react-dom';
import ChangeCardModal from './ChangeCardModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChangeCardModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
