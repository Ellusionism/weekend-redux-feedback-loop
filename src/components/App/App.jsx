import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route exact path = '/feeling'>
          <Feeling />
        </Route>
        <Route exact path = '/understanding'>
          <Understanding />
        </Route>
        <Route exact path = '/support'>
          <Support />
        </Route>
        <Route exact path = '/comments'>
          <Comments />
        </Route>
      </div>
    </Router>
  );
}

export default App;
