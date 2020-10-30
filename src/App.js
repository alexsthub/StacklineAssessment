import "./App.css";

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import ProductGrid from "./components/productgrid/ProductGrid";
import ProductView from "./components/productview/ProductView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductGrid} />
          <Route exact path="/product/:id" component={ProductView} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
