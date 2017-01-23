import * as actions from './actions';

const generateEmptyBoard = (sideLength) => {
  const board = [];
  for(let x = 0; x < sideLength; x++){
    board[x] = [];
    for(let y = 0; y < sideLength; y++){
      board[x][y] = {x, y, value: '?', key: x + ',' + y, shuffle: false };
    }
  }
  return board;
}
const MAX_GAME_TIME = 120000; // 120k ms = 2mins
const MAX_SIDE_LENGTH = 4;

const initialState = {
    board: generateEmptyBoard(MAX_SIDE_LENGTH),
    currentSelection: [],
    wordsFound: {}, // hash for fast lookup.
    score: 0,
    timeRemaining: MAX_GAME_TIME,
    maxTimeRemaining: MAX_GAME_TIME, 
    isShuffling: false
};

const boggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RESET: 
      return {...state, initialState};
    case actions.SHUFFLE: {
      const newBoard = JSON.parse(JSON.stringify(state.board)); // deep copy
      newBoard.forEach((row)=> {
        row.forEach((cell)=>{
          cell.shuffle = true;
        })
      });
      return {
        ...state,
        board: newBoard,
        isShuffling: true
      }
    }
    case actions.UPDATE_CELL: {
      const newBoard = JSON.parse(JSON.stringify(state.board)); // deep copy
      let cell = newBoard[action.x][action.y];
      newBoard[action.x][action.y] = { ...cell, value: action.value, shuffle: action.shuffle };
      return {
        ...state,
        board: newBoard
      }
    }
    default:
      return state;
  }
}

export default boggleReducer;