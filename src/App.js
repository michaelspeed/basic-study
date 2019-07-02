import React from 'react';
import './App.css';
import Hero from './Components/Hero'

// https://github.com/michaelspeed/basic-study

// src/Components/Hero
// src/app

class App extends React.Component {

  state = {
    some: true
  }

  render() { 
    return (
      <div className="App">
        <Hero some={this.state.some} />
        <button onClick={() => {
          this.setState({some: !this.state.some})
         }}>Switch</button>
      </div>
    );
  }
}

export default App;
