import React from 'react';
import IdeasDashboard from './IdeasDashboard';
import {mount} from "enzyme";
import IdeaCard from "./IdeaCard/IdeaCard";

const label1 = "label1";
const label2 = "label2";
const label3 = "label3";
const cards = [
  {
    title: "My card 1",
    labels: [label1, label2],
    text: "lorem ipsum"
  },
  {
    title: "My card 2",
    labels: [label1],
    text: "lorem ipsum"
  },
  {
    title: "My card 3",
    labels: [label2],
    text: "lorem ipsum"
  }
];

it('shows all cards on empty filter', () => {
  const component = mount(<IdeasDashboard labelFilter={[]} initialCards={cards}/>);
  expect(component.find(IdeaCard)).toHaveLength(cards.length);
  expect(component).toMatchSnapshot()
});

it('shows no cards on non matching filter', () => {
  const component = mount(<IdeasDashboard labelFilter={[label3]} initialCards={cards}/>);
  expect(component.find(IdeaCard)).toHaveLength(0);
  expect(component).toMatchSnapshot()
});

it('shows filtered cards if filter is applied', () => {
  const component = mount(<IdeasDashboard labelFilter={[label2]} initialCards={cards}/>);
  expect(component.find(IdeaCard)).toHaveLength(2);
  expect(component).toMatchSnapshot()
});

it('applies new filter when changed', () => {
  const component = mount(<IdeasDashboard labelFilter={[label3]} initialCards={cards}/>);
  expect(component.find(IdeaCard)).toHaveLength(0);

  component.setProps({initialCards: cards, labelFilter: [label1]});
  component.update();
  expect(component.find(IdeaCard)).toHaveLength(2);
});

test.todo('deletes card');
test.todo('shows edit modal');
test.todo('does not modify cards on cancel');
test.todo('modifies card on save');
test.todo('adds new card');
