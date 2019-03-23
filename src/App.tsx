import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Demo from "./components/Demo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Demo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
