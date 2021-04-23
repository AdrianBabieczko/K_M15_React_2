import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state,props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: tilt => dispatch(createActionAddColumn({
    listId: props.id,
    title: tilt,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);