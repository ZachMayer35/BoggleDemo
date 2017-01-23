import { connect } from 'react-redux';
import Board from './boggle/board';

import dictionary from '../data/dictionary';

import * as actions from './boggle/actions';


const mapStateToProps = (state, props) => {
  return { ...state.boggle, _props: props };
};
const mapDispatchToProps = (dispatch) => ({
  updateCell: (cell) => {
    dispatch(actions.updateCell(cell));
  }, 
  shuffleBoard: () => {
    dispatch(actions.shuffle());
  },
  selectCell: () => {
    //TODO
  },
  clearSelection: () => {
    //TODO
  },
  submitWord: () => {
    //TODO
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
