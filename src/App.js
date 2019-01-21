import React, { Component } from "react";
//import { Helmet } from "react-helmet";
import "./styles/global.scss"; 
import { Home } from "./containers/Home/index";

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

// LT-TODO - Use react-helmet to apply stuff liek site title (constants)
/* 
<Helmet>
  <meta charSet="utf-8" />
  <title>My Title</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
*/