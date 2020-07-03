import React from 'react';
//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import Posts from './screens/Posts';
//import Todo from './screens/Todo/index';
//import Menu from './screens/Menu/index';
import './style.css';
/*
import Albums from './screens/Albums/index';
const App = () => {
  return (
    <BrowserRouter>        
<header>
<ul>

<li>
<Link className="link" to='/'>Menu</Link> </li>

<li><Link className="link" to='/posts'>Postagens</Link></li>

<li><Link className="link" to='/albums'>Albuns</Link></li>

<li><Link className="link" to='/todos'>TO-DOs</Link></li>

</ul>
  </header>        
       

      <Switch>

        <Route path='/' exact>
          <Menu />
        </Route>
        
        <Route path='/posts'>
          <Posts />
        </Route>
        
        <Route path='/todos'>
          <Todo />

        </Route>
          
        <Route path='/albums'>
          <Albums/>

        </Route>
     
     
     
      </Switch>
    </BrowserRouter>

  );
};
export default App;
*/
import Routes from "./routes";

function App() {
  return (
    <Routes />
  ); 
  }

export default App;