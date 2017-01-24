import React, { Component } from 'react';
import Boggle from './components/boggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heroku Test!</h1>
        <Boggle className='App'/>
      </div>
    );
  }
}

export default App;
