import React from 'react';
import ChangeIdeaModal from './ChangeIdeaModal';
import {mount} from 'enzyme';

it('renders without crashing', () => {
  const value = {
    title: "Title",
    text: "Text",
    labels: ["label1", "label2"]
  };
  mount(<ChangeIdeaModal show={true} value={value} onSave={jest.fn()} onCancel={jest.fn()}/>);
});
