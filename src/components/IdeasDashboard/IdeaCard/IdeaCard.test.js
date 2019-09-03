import React from 'react';
import IdeaCard from './IdeaCard';
import renderer from "react-test-renderer";

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
