import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import SectionPage from './Pages/SectionPage'

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <NavBar />
          <div id='app-container'>
            <Route path="/" exact component={HomePage} />
            <Route path="/section/:section" exact component={SectionPage} />
         </div>
      </Router>
    );
  }
}

export default App;


