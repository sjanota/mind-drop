import React from 'react';
import ReactDOM from 'react-dom';
import AddIdeaCard from './AddIdeaCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddIdeaCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
