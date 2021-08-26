import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './views/About';
import Index from './views/Index';
import Adress from './views/about/Adress';

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
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/about/' component={About} />{/*Rota fixa pode vir antes de rotas com variaveis*/}
          <Route path='/:abc' component={Adress} /> {/*Rota tiver várivel ela deve sempre ficar por ultimo*/}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
