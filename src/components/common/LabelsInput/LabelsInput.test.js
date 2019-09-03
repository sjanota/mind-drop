import React from 'react';
import renderer from 'react-test-renderer';
import LabelsInput from "./LabelsInput";
import {shallow} from 'enzyme';
import RemovableLabel from "../RemovableLabel/RemovableLabel";

const labels = ['label1', 'label2', 'label3'];

it('matches snapshot', () => {
  const tree = renderer
    .create(<LabelsInput labels={labels} addLabel={jest.fn()} deleteLabel={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});

describe('shallow', () => {
  const addLabel = jest.fn();
  const deleteLabel = jest.fn();
  const component = shallow(<LabelsInput labels={labels} addLabel={addLabel} deleteLabel={deleteLabel}/>);

  beforeEach(() => {
    addLabel.mockReset();
    deleteLabel.mockReset()
  });

  it('displays all the labels', () => {
    labels.forEach(label => {
      expect(component.find(RemovableLabel).filter({label})).toBeDefined();
    });
  });

  it('deletes label on RemovableLabel onDelete', () => {
    const removedIdx = 1;
    const onDelete = component
      .find(RemovableLabel)
      .filter({label: labels[removedIdx]})
      .prop('onDelete');

    onDelete();

    expect(deleteLabel).toBeCalledWith(labels[removedIdx]);
  });

  it('adds new label when input ends with space', () => {
    const newLabel = 'new-label';

    component.find('input').simulate('change', {target: {value: newLabel + " "}});

    expect(addLabel).toBeCalledWith(newLabel);
    expect(component.find('input')).toHaveValue("");
  });

  it(`keeps input when input doesn't end with space`, () => {
    const newLabel = 'new-label';

    component.find('input').simulate('change', {target: {value: newLabel}});

    expect(addLabel).toBeCalledTimes(0);
    expect(component.find('input')).toHaveProp('value', newLabel);
  });
});