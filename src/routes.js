import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Posts from './screens/Posts';
import Todo from './screens/Todo/index';
import Menu from './screens/Menu/index';
import Albums from './screens/Albums/index';
export default function Routes(){
return(
<BrowserRouter>
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
)
}