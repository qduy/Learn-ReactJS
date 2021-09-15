
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import { route } from './route';

class App extends Component {
   
  showRoute = (route) => {
      var result = null;
      result = route.map((item, index) => {
          return(
            <Route
              key = {index}
              path = {item.path}
              exact = {item.exact}
              component = {item.component}
            />
          )
      })
      return result
  }

  render() {
    return (
      <div className="App">

        <Router>

          {/* menu */}

          <Menu />

          {/* noi dung */}
          <Switch>
            {this.showRoute(route)}
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
