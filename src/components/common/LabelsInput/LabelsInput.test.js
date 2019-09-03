import React from 'react';
import ReactDOM from 'react-dom';
import LabelsInput from "./LabelsInput";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabelsInput labels={[]} setLabels={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


