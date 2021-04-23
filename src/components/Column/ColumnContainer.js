import {connect} from 'react-redux';
import Column from './Column';

export const getCardsFromColumn = ({cards}, columnId)=> cards.filter(card => card.columnId == columnId);

const mapStateToPros = (state, props) => ({
  cards: getCardsFromColumn(state,props.id),
});

export default connect(mapStateToPros)(Column);