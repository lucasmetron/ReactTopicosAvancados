import React, { Suspense } from 'react' //lib q precisa ser importada
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Index from './views/Index';
import Adress from './views/about/Adress';

const About = React.lazy(() => import('./views/About')) //impotação dinÂmica

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
        <Suspense fallback={<div>Loading...</div>}> {/* Dessa forma, todas as rotas fica com a div loading setada caso estejam carregando */}
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/about/' component={() => <About />} /> {/* Dessa forma, componente About só sera carregado quando acessado*/}
            <Route path='/:abc' component={Adress} />
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
