import React, {useEffect, useReducer} from 'react';
import './IdeasDashboard.css';
import ChangeCardModal from "./ChangeIdeaModal/ChangeIdeaModal";
import AddCardCard from "./AddIdeaCard/AddIdeaCard";
import IdeaCard from "./IdeaCard/IdeaCard";
import PropTypes from 'prop-types';
import removeFromList from "../../util/immutable/removeFromList";
import addToList from "../../util/immutable/addToList";
import replaceOnList from "../../util/immutable/replaceOnList";
import CardColumns from "react-bootstrap/CardColumns";

const emptyCard = {
  title: "",
  text: "",
  labels: []
};

const ITEMS_FILTERED = 'ITEMS_FILTERED';
const itemsFiltered = (labelFilter) => ({type: ITEMS_FILTERED, value: labelFilter});

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
  const filteredCards = state.labelFilter.length > 0
    ? state.cards.filter(c => c.labels.indexOf(state.labelFilter[0]) !== -1)
    : state.cards;
  return {
    ...state,
    filteredCards
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ITEMS_FILTERED:
      return itemsChanged({...state, labelFilter: action.value});
    case ADD_ITEM:
      return {...state, showModal: true, modalState: emptyCard};
    case EDIT_ITEM:
      return {...state, showModal: true, modalState: action.value, editItem: state.cards.indexOf(action.value)};
    case ITEM_DELETED:
      return itemsChanged({...state, cards: removeFromList(state.cards, action.value)});
    case CHANGE_CANCELED:
      return {...state, showModal: false, editItem: null};
    case CHANGE_APPLIED: {
      const cards = state.editItem != null
        ? replaceOnList(state.cards, state.editItem, action.value)
        : addToList(state.cards, action.value);
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
  labelFilter: [],
  filteredCards: [],
  cards: []
};


export default function IdeasDashboard({labelFilter, initialCards}) {
  const cards = initialCards || JSON
    .parse(localStorage.getItem('cards'))
    || [];
  const [state, dispatch] = useReducer(reducer, {...initialState, cards}, itemsChanged);
  useEffect(() => {
    dispatch(itemsFiltered(labelFilter))
  }, [labelFilter]);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(state.cards));
  }, [state.cards]);

  return <div className={"IdeasDashboard"}>
    <CardColumns>
    {state.filteredCards.map((card, idx) => <IdeaCard
      key={idx}
      card={card}
      onDelete={() => dispatch(itemDeleted(card))}
      onEdit={() => dispatch(editItem(card))}
    />)}
    <AddCardCard
      onClick={() => dispatch(addItem())}
    />
    </CardColumns>
    <ChangeCardModal
      show={state.showModal}
      onCancel={() => dispatch(changeCanceled())}
      onSave={(card) => dispatch(changeApplied(card))}
      value={state.modalState}
    />
  </div>
}

IdeasDashboard.propTypes = {
  labelFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialCards: PropTypes.array
};

IdeasDashboard.defaultProps = {
  initialCards: null
};
