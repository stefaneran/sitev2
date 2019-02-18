import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Home } from "./containers/Home/index";
import "./styles/global.scss";
import { constants } from './constants';

const { siteTitle } = constants.text.general;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/png" href="./static/images/favicon.png" />
          <title>{siteTitle}</title>
        </Helmet>
        <Home />
      </div>
    );
  }
}

export default App;