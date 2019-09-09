/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import './Container.css';
import IdeasDashboard from "../IdeasDashboard";
import {useAuth0} from "../../../react-auth0-wrapper";

export default function Container(props) {
  const [cards, setCards] = useState(null);

  const {getTokenSilently} = useAuth0();

  const getCards = async () => {
    try {
      const token = await getTokenSilently();
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/app-data`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const responseData = await response.json();
      setCards(responseData.cards)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cards == null) {
      getCards()
    }
  }, [cards]);

  const postCards = async (cards) => {
    try {
      const token = await getTokenSilently();
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/app-data`, {
        method: 'POST',
        body: JSON.stringify({name: "global", cards}),
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      await response.text();
    } catch (error) {
      console.error(error);
    }
  };

  const setAndSaveCards = (cards) => {
    postCards(cards);
    setCards(cards)
  };

  return <div className={"Container"}>
    <IdeasDashboard {...props} cards={cards || []} setCards={setAndSaveCards}/>
  </div>
}

Container.propTypes = {};
