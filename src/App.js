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
            <li> <Link to='/about/abc'> Index</Link> </li>
            <li> <Link to='/about/def'>About</Link> </li>
          </ul>
        </nav>
        <Route path='/' exact component={Index} />
        <Route path='/about/:minhaVariavel' component={About} /> {/* : indica qé uma variavel que esta acessivel */}
        <Route path='/about/:minhaVariavel(abc|def)' component={About} /> {/* () permite que somente rotas com valor abc e def acessam essa rota */}
      </Router>

    </div>
  );
}

export default App;
