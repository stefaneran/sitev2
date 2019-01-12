import React, { Component } from 'react'; 

import "./Home.scss";

export class Home extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div id="HomePage" className="container">
        <h1>Homepage</h1>
      </div>
    );
  }
}