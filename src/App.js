import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import SectionPage from './Pages/SectionPage'

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <div id='app-container'>
            <NavBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/sections/:section" exact component={SectionPage} />
            <Route path="/sections/:section/:id" exact component={SectionPage} />
         </div>
      </Router>
    );
  }
}

export default App;


