import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <NavBar />
          <div id='app-container'>
            <Route path="/" exact component={HomePage} />
         </div>
      </Router>
    );
  }
}

export default App;


