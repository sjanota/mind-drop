import React from 'react';
import './Cards.css';
import AddCardModal from "../AddCardModal/AddCardModal";
import AddCardCard from "../AddCardCard/AddCardCard";
import CardCard from "../CardCard/CardCard";

function Cards({labelFilter}) {
  const [cards, setCards] = React.useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [showCreateModal, setShowCreateModal] = React.useState(false);

  const storeCards = (cards) => {
    localStorage.setItem('cards', JSON.stringify(cards));
    return cards
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleOpenCreateModal = () => setShowCreateModal(true);
  const addCard = (card) => setCards(old => storeCards([...old, card]));
  const deleteCard = (card) => setCards(old => storeCards([...old.slice(0, old.indexOf(card)), ...old.slice(old.indexOf(card) + 1, old.length)]));

  console.log(labelFilter)
  const filteredCards = labelFilter ? cards.filter(c => c.label === labelFilter) : cards;

  return <div className={"Cards"}>
    {filteredCards.map(card => <CardCard key={card.title} card={card} onDelete={() => deleteCard(card)}/>)}
    <AddCardCard onClick={handleOpenCreateModal}/>
    <AddCardModal show={showCreateModal} onClose={handleCloseCreateModal} onSaveAndClose={(card) => {
      addCard(card);
      handleCloseCreateModal();
    }}/>
  </div>
}

export default Cards;
