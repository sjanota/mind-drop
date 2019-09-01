import React from 'react';
import './Cards.css';
import AddCardModal from "../AddCardModal/AddCardModal";
import AddCardCard from "../AddCardCard/AddCardCard";
import CardCard from "../CardCard/CardCard";

function Cards({labelFilter}) {
  const [cards, setCards] = React.useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editItemIdx, setEditItemIdx] = React.useState(null);

  const storeCards = (cards) => {
    localStorage.setItem('cards', JSON.stringify(cards));
    return cards
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleOpenEditModal = (idx) => {
    setEditItemIdx(idx);
    setShowEditModal(true);
  };
  const addCard = (card) => setCards(old => storeCards([...old, card]));
  const editCard = (card, idx) => setCards(old =>
    storeCards([...old.slice(0, idx), card, ...old.slice(idx + 1, old.length)])
  );
  const deleteCard = (idx) => setCards(old => storeCards([...old.slice(0, idx), ...old.slice(idx + 1, old.length)]));

  const filteredCards = labelFilter ? cards.filter(c => c.label === labelFilter) : cards;

  return <div className={"Cards"}>
    {filteredCards.map((card) => {
      const idx = cards.indexOf(card);
      return <CardCard key={card.title} card={card} onDelete={() => deleteCard(idx)}
                       onEdit={() => handleOpenEditModal(idx)}/>
    })}
    <AddCardCard onClick={handleOpenCreateModal}/>
    <AddCardModal show={showCreateModal} onClose={handleCloseCreateModal} initialValue={{}} onSaveAndClose={(card) => {
      addCard(card);
      handleCloseCreateModal();
    }}/>
    {showEditModal ?
      <AddCardModal show={showEditModal} onClose={handleCloseEditModal} initialValue={cards[editItemIdx]}
                    onSaveAndClose={(card) => {
                      editCard(card, editItemIdx);
                      setEditItemIdx(null);
                      handleCloseEditModal();
                    }}/> : <></>
    }
  </div>
}

export default Cards;
