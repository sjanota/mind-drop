import React from 'react';
import renderer from 'react-test-renderer';
import LabelsInput from "./LabelsInput";
import {shallow} from 'enzyme';
import RemovableLabel from "../RemovableLabel/RemovableLabel";

const labels = ['label1', 'label2', 'label3'];

it('matches snapshot', () => {
  const tree = renderer
    .create(<LabelsInput labels={labels} setLabels={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});

describe('shallow', () => {
  const setLabels = jest.fn();
  const component = shallow(<LabelsInput labels={labels} setLabels={setLabels}/>);

  beforeEach(() => {
    setLabels.mockReset();
  });

  it('displays all the labels', () => {
    labels.forEach(label => {
      expect(component.find(RemovableLabel).filter({label})).toBeDefined();
    });
  });

  it('deletes label on RemovableLabel onDelete', () => {
    const removedIdx = 1;
    const expected = [labels[0], labels[2]];
    const onDelete = component
      .find(RemovableLabel)
      .filter({label: labels[removedIdx]})
      .prop('onDelete');
    onDelete();

    expect(setLabels).toBeCalledTimes(1);
    expect(setLabels.mock.calls[0]).toHaveLength(1);

    const callback = setLabels.mock.calls[0][0];
    expect(callback(labels)).toEqual(expected)
  });

  it('adds new label when input ends with space', () => {
    const newLabel = 'new-label';
    const expected = [...labels, newLabel];
    const input = component.find('input');
    input.simulate('change', {target: {value: newLabel + " "}});

    expect(setLabels).toBeCalledTimes(1);
    expect(setLabels.mock.calls[0]).toHaveLength(1);

    const callback = setLabels.mock.calls[0][0];
    expect(callback(labels)).toEqual(expected);

    expect(input).toHaveValue("");
  });

  it(`keeps input when input doesn't end with space`, () => {
    const newLabel = 'new-label';
    component.find('input').simulate('change', {target: {value: newLabel}});

    expect(setLabels).toBeCalledTimes(0);
    expect(component.find('input')).toHaveProp('value', newLabel);
  });
});