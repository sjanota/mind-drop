import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownViewer from "./MarkdownViewer";

it('renders without crashing', () => {
  const tree = renderer
    .create(<MarkdownViewer/>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
