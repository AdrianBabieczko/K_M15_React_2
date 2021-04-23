import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux';

const mapStateToPros = (state, props) => ({
  cards: getCardsForColumn(state,props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: titl => dispatch(createActionAddCard({
    columnId: props.id,
    title: titl,
  })),
});

export default connect(mapStateToPros, mapDispatchToProps)(Column);