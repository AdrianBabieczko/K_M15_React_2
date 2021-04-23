import shortId from 'shortid';

//selectors
export const getCardsForColumn = ({cards}, columnId)=> cards.filter(card => card.columnId == columnId);

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