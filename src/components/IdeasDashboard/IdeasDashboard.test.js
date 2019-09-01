import React from 'react';
import ReactDOM from 'react-dom';
import IdeasDashboard from './IdeasDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdeasDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
