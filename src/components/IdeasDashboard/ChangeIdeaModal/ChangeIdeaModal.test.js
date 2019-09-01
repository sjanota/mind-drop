import React from 'react';
import ReactDOM from 'react-dom';
import ChangeIdeaModal from './ChangeIdeaModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChangeIdeaModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
