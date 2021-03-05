import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Products from './Components/products';

import Home from './Components/home';
class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
<Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products}/>
        
        
        </Switch>

</Router>

      </div>
    );
  }
}

export default App;
