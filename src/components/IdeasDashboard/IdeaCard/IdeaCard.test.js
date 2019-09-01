import React from 'react';
import ReactDOM from 'react-dom';
import IdeaCard from './IdeaCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdeaCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
