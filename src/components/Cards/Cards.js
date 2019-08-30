import React from 'react';
import './Cards.css';
import AddCardModal from "../AddCardModal/AddCardModal";
import AddCardCard from "../AddCardCard/AddCardCard";
import CardCard from "../CardCard/CardCard";

function Cards() {
  const [cards, setCards] = React.useState([]);
  const [showCreateModal, setShowCreateModal] = React.useState(false);

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleOpenCreateModal = () => setShowCreateModal(true);
  const addCard = (card) => setCards(old => [...old, card]);
  const deleteCard = (card) => setCards(old => [...old.slice(0, old.indexOf(card)), ...old.slice(old.indexOf(card) + 1, old.length)]);

  return <div className={"Cards"}>
    {cards.map(card => <CardCard key={card.title} card={card} onDelete={() => deleteCard(card)}/>)}
    <AddCardCard onClick={handleOpenCreateModal}/>
    <AddCardModal show={showCreateModal} onClose={handleCloseCreateModal} onSaveAndClose={(card) => {
      addCard(card);
      handleCloseCreateModal();
    }}/>
  </div>
}

export default Cards;
