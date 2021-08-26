import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import About from './views/About';
import Index from './views/Index';

function App() {


  return (
    <div>
      <Router>
        <Prompt when={true} message={(location) => `Deseja sair para ${location.pathname}`} /> {/*Basta add o comp Prompt com esses 2 atributos */}
        <nav>
          <ul>
            <li> <Link to='/'> Index</Link> </li>
            <li> <Link to='/about/def'>About</Link> </li>
          </ul>
        </nav>
        <Route path='/' exact component={Index} />
        <Route path='/about/:minhaVariavel' component={About} />
      </Router>

    </div>
  );
}

export default App;
