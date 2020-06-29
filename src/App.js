import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Posts from './screens/Posts';
import Todo from './screens/Todo/index';
import Menu from './screens/Menu/index';

import Albums from './screens/Albums/index';
const App = () => {
  return (
    <BrowserRouter>        
        
        <ul>

         <li><Link  to='/'>Menu</Link></li>
       
        <li><Link  to='/posts'>Postagens</Link></li>

        <li><Link  to='/albums'>Albuns</Link></li>

        <li><Link  to='/todos'>TO-DOs</Link></li>
       
      </ul>

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