import React from 'react';
import axios from 'axios';
import './App.css';
import { useHistory, HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Review from '../Review/Review.js';
import Submitted from '../Submitted/Submitted.js';
// Importing the components to be displayed
function App() {

  const history = useHistory();

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path = '/'>
          <Link to = '/feeling'>
            <button>Start New Feedback</button>
          </Link>
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
        <Route exact path = '/review'>
          <Review />
        </Route>
        <Route exact path = '/submitted'>
          <Submitted />
        </Route>
      </div>
    </Router>
    // Router paths to conditionally render components depending on the URL path
  );
}

export default App;
