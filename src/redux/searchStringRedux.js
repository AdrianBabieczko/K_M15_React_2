// selectors
export const getSearchString = (state) => state.searchString;

export const countAllCards = ({cards}) => cards.length;

export const  countVisibleCards = state => state.cards.filter(card => new RegExp(state.searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({payload: payload, type: CHANGE});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}