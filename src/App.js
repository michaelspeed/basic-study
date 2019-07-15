import React from 'react';
import './App.css';
import Core from "./Core";
import {Provider} from "react-redux";
import store from "./store/store";

// https://github.com/michaelspeed/basic-study

// src/Components/Hero
// src/app

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Core/>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
