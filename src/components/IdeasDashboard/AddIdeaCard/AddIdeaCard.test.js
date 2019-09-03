import React from 'react';
import ReactDOM from 'react-dom';
import AddIdeaCard from './AddIdeaCard';
import {mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddIdeaCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calls onClick when button is clicked', () => {
  const onClick = jest.fn();
  const component = mount(<AddIdeaCard onClick={onClick}/>);
  component.find('button').simulate('click');
  expect(onClick).toBeCalledTimes(1);
});
