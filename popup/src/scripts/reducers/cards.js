export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CARDS_SUCCESS':
      return action.cards;
    default:
      return state;
  }
};
