import shortId from 'shortid';

//selectors
export const getCardsForColumn = (state, columnId)=> state.cards.filter(card => card.columnId == columnId);

export const getCardsForSearchString = (state) => state.cards.filter(card => new RegExp(state.searchString, 'i').test(card.title));

//action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

//action types
const ADD_CARD = createActionName('ADD_CARD');

//action creators
export const createActionAddCard = payload => ({payload: {...payload, id:shortId.generate()}, type: ADD_CARD});

//reducer
export default function reducer(startPart=[], action=[]){
  switch (action.type){
    case ADD_CARD:
      return [...startPart, action.payload];
    default:
      return startPart;
  }
}