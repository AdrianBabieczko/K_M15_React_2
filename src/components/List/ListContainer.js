import {connect} from 'react-redux';
import List from './List';

export const getColumnsFromList = ({columns}, listId)=> columns.filter(col => col.listId == listId);

const mapStateToProps = (state, props) => ({
  columns: getColumnsFromList(state,props.id),
});

export default connect(mapStateToProps)(List);