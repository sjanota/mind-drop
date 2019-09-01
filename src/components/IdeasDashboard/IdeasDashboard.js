import React from 'react';
import './IdeasDashboard.css';
import ChangeCardModal from "./ChangeIdeaModal/ChangeIdeaModal";
import AddCardCard from "../AddCardCard/AddCardCard";
import CardCard from "./IdeaCard/IdeaCard";

const emptyCard = {
  title: "",
  text: "",
  labels: []
};

const ADD_ITEM = 'ADD_ITEM';
const addItem = () => ({type: ADD_ITEM});

const EDIT_ITEM = 'EDIT_ITEM';
const editItem = (item) => ({type: EDIT_ITEM, value: item});

const ITEM_DELETED = 'ITEM_DELETED';
const itemDeleted = (item) => ({type: ITEM_DELETED, value: item});

const CHANGE_APPLIED = 'CHANGE_APPLIED';
const changeApplied = (item) => ({type: CHANGE_APPLIED, value: item});

const CHANGE_CANCELED = 'CHANGE_CANCELED';
const changeCanceled = () => ({type: CHANGE_CANCELED});

const itemsChanged = (state) => {
  return {...state, filteredCards: state.labelFilter ? state.cards.filter(c => c.label === state.labelFilter) : state.cards}
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, showModal: true, modalState: emptyCard};
    case EDIT_ITEM:
      return {...state, showModal: true, modalState: action.value, editItem: state.cards.indexOf(action.value)};
    case ITEM_DELETED:
      const idx = state.cards.indexOf(action.value);
      return itemsChanged({...state, cards: [...state.cards.slice(0, idx), ...state.cards.slice(idx + 1, state.cards.length)]});
    case CHANGE_CANCELED:
      return {...state, showModal: false, editItem: null};
    case CHANGE_APPLIED: {
      const cards = state.editItem != null
        ? [
          ...state.cards.slice(0, state.editItem),
          action.value,
          ...state.cards.slice(state.editItem + 1, state.cards.length)
        ]
        : [...state.cards, action.value];
      return itemsChanged({...state, showModal: false, editItem: null, cards});
    }
    default:
      console.log("Unexpected action", action);
      return state;
  }
};

const initialState = {
  showModal: false,
  modalState: emptyCard,
  editItem: null,
  labelFilter: "",
  filteredCards: [],
  cards: []
};


function IdeasDashboard({labelFilter}) {
  const cards = JSON
    .parse(localStorage.getItem('cards'))
    .map(({label, ...card}) => !label ? card : {...card, labels: [label]})
    || [];
  const [state, dispatch] = React.useReducer(reducer, {...initialState, cards, labelFilter}, itemsChanged);

  React.useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(state.cards));
  }, [state.cards]);

  return <div className={"IdeasDashboard"}>
    {state.filteredCards.map((card, idx) => <CardCard
      key={idx}
      card={card}
      onDelete={() => dispatch(itemDeleted(card))}
      onEdit={() => dispatch(editItem(card))}
    />)}
    <AddCardCard
      onClick={() => dispatch(addItem())}
    />
    <ChangeCardModal
      show={state.showModal}
      onCancel={() => dispatch(changeCanceled())}
      onSave={(card) => dispatch(changeApplied(card))}
      value={state.modalState}
    />
  </div>
}

export default IdeasDashboard;
