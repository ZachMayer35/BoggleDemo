import React, { Component } from 'react';
import Tile from './tile';

class Board extends Component {
  constructor (props) {
    super(props);

  }
  render () {
    const { board, updateCell, shuffleBoard } = this.props;
    const randomStall = this.getRandomStall;
    return (
      <div className='boggle-container'>
        <h1>Boggle!</h1>
        <table className='boggle-board'>
          <tbody>
            {
              board.map((row, i) => (
                  <tr key={'x' + i}>
                    {row.map((cell, j) => ( 
                      <td key={cell.key}>
                        <Tile cell={cell} stall={randomStall()} updateCell={updateCell} />
                      </td> )) 
                    }
                  </tr>
                )
              )
            }
          </tbody>
        </table>
        <br />
        <a className='btn btn-primary' onClick={shuffleBoard}>Shuffle</a>
      </div>
    );
  }
  getRandomStall () {
    return Math.round(Math.random() * (2000))
  }
}

export default Board;
