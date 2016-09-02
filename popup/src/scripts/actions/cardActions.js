import cardsApi from '../api/mockCardsApi';

export function loadCardsSucess(cards) {
  return {
    type: 'LOAD_CARDS_SUCCESS',
    cards
  };
}

export function loadCards() {
  return function(dispatch) {
    return cardsApi.getMyCards()
      .then(cards => {
        dispatch(loadCardsSucess(cards));
      })
      .catch(err => {
        throw err;
      });
  };
}
