import React from 'react';
import './App.css';

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
        
      </div>
    );
  }
}

export default App;
