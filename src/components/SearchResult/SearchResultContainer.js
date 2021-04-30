import {connect} from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = (state) => ({
  searchString:state.searchString,
});

export default connect(mapStateToProps)(SearchResult);