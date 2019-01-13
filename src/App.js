import React, { Component } from "react";
//import { Helmet } from "react-helmet";

import "./styles/global.scss";

// Dev - Use cookies in future
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

/* TODO - Later
<Helmet>
  <meta charSet="utf-8" />
  <title>My Title</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>

*/