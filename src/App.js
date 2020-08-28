import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Redirect, Switch, BrowserRouter } from "react-router-dom";

import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Navigation from "./components/navigation/Navigation";
import Contact from "./components/contact/Contact";
import Notfound from "./components/notfound/Notfound";
import Jeopardy from "./components/jeopardy/Jeopardy";

class App extends Component {
  render() {
    return (
      <div>
        {/* define our routes */}

        <Navigation />

        <Switch>
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />

          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="eric" />}
          />

          <Route
            exact
            path="/welcome/:name"
            render={(props) => <Welcome {...props} />}
          />

          <Route path="/jeopardy" component={Jeopardy} />

          <BrowserRouter>
            <Route exact path="/404" component={Notfound} />

            <Redirect to="/404" />
          </BrowserRouter>
        </Switch>
      </div>
    );
  }
}
export default App;
