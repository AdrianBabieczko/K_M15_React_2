import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsForSearchString} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;

  state.searchString = searchString;

  return {
    cards: getCardsForSearchString(state),
  };
};

export default connect(mapStateToProps)(SearchResult);