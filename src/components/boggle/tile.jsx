import React, { Component } from 'react';

const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'QU', 'R', 'S', 'T', 'TH', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Tile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: this.props.cell.value || 'A',
      locked: this.props.locked || true,
      selected: this.props.selected || false,
      stall: this.props.stall || 1500,
      step: this.props.step || 20
    };

    this.spin = this.spin.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    if(nextProps.cell.shuffle === true && this.state.locked === true){ // if we're changing from locked to shuffling...
      this.setState({selected: false});
      this.spin(this.state.step, this.state.value, this.state.stall);
    }
  }
  render () {
    const {value, locked, selected} = this.state;
    return (
      <div onClick={this.toggleSelect} className={locked ? (selected ? 'boggle-tile bg-green' : 'boggle-tile') : 'boggle-tile bg-red'}>
        <span>{value}</span>
      </div>
    );
  }
  spin (step, val, stall) {
    const _spin = (step, val) => {
      let newVal = val;
      let nextIdx = Math.round(Math.random() * (Alphabet.length - 1));
      newVal = Alphabet[nextIdx];
      this.setState({value: newVal, locked: false});
      if(step < 400) {
        if(stall > 0){
          stall -= step;
        } else {
          step += 20
        }
        this.spin(step, newVal, stall);
      } else {
        this.setState({locked: true});
        this.props.updateCell({...this.props.cell, value: this.state.value, shuffle: false });
      }
    }
    stall = stall || 0;
    setTimeout(() => {
      _spin(step, val, stall);
    }, step);
  }
  toggleSelect (e) {
    if(this.state.locked) {
      this.setState({selected: !this.state.selected});
    }
  }
}

export default Tile;
