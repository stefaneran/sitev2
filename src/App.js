import React, { Component } from 'react';

import "./styles/global.scss";

// Dev
import { Home } from './containers/Home/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home /> 
      </div>
    );
  }
}

export default App;
