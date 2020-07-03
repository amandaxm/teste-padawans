import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../../style.css';
import { FiArrowLeft  } from 'react-icons/fi'
import api from '../../api';
class Todo extends Component {
state = {
todos: [],
}
async componentDidMount() {
const response = await api.get('/todos');
this.setState({ todos: response.data });
}
render() {
const { todos } = this.state;
return (
<div>
   <ul>
      <li>
         <Link className="link" to='/'>
         <FiArrowLeft size={16} color="rgb(95, 52, 115)" />
         Menu</Link> 
      </li>
   </ul>
   <h1>TO-DOs</h1>
   <table>
      <tr>
         <th scope="col">Id</th>
         <th scope="col">Titulo</th>
      </tr>
      {todos.map(todo => (
      <tr>
         <td>
            {todo.id}            
         </td>
         <td>
            {todo.title}            
         </td>
      </tr>
      ))}
   </table>
</div>
);
};
};
export default Todo;