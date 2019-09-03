import React from 'react';
import IdeaCard from './IdeaCard';
import renderer from "react-test-renderer";
import {mount} from 'enzyme';

it('matches snapshot', () => {
  const value = {
    title: "Title",
    text: "Text",
    labels: ["label1", "label2"]
  };
  const tree = renderer
    .create(<IdeaCard card={value} onEdit={jest.fn()} onDelete={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});

describe('', () => {
  const value = {
    title: "Title",
    text: "Text",
    labels: ["label1", "label2"]
  };
  const onEdit = jest.fn();
  const onDelete = jest.fn();
  const component = mount(<IdeaCard card={value} onEdit={onEdit} onDelete={onDelete}/>);

  it('calls onDelete when delete button is clicked', () => {
    component.find('button.delete').simulate('click');
    expect(onDelete).toBeCalledTimes(1);
  });

  it('calls onEdit when edit button is clicked', () => {
    component.find('button.edit').simulate('click');
    expect(onEdit).toBeCalledTimes(1);
  });
});
