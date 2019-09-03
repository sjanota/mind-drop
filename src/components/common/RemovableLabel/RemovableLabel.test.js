import React from 'react';
import RemovableLabel from "./RemovableLabel";
import renderer from "react-test-renderer";
import {mount} from "enzyme";

it('renders without crashing', () => {
  const tree = renderer
    .create(<RemovableLabel label={"label"} onDelete={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls onDelete callback', () => {
  const onDelete = jest.fn();
  const component = mount(<RemovableLabel onDelete={onDelete} label={"label"}/>);
  component.find("button").simulate('click');

  expect(onDelete).toBeCalledTimes(1);
});