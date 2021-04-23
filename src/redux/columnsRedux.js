import shortId from 'shortid';

//selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(col=>col.listId == listId);

//action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

//action types
const ADD_COLUMN = createActionName('ADD_COLUMN');

//action creators
export const createActionAddColumn = payload => ({payload: {...payload, id:shortId.generate()}, type: ADD_COLUMN});

//reducer
export default function reducer(statePart=[],action=[]){
  switch(action.type){
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}