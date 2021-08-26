import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './views/About';
import Index from './views/Index';

function App() {


  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li> <Link to='/'> Index</Link> </li>
            <li> <Link to='/about/'>About</Link> </li>
          </ul>
        </nav>
        <Route path='/' exact component={Index} />
        <Route path='/about/' component={About} />
      </Router>

    </div>
  );
}

export default App;
