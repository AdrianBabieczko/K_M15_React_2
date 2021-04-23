import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state,props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: tit => dispatch(createActionAddColumn(
    {
      listId: props.id,
      title:tit,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);