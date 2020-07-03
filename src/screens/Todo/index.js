import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../../style.css';
import { FiArrowLeft  } from 'react-icons/fi'
import api from '../../api';

function myFunction() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
 
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];     
     if (td) {
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
 }

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
   <div className="field">

<input type="text" id="myInput" onKeyUp={myFunction} placeHolder="Procura por Id.."></input>
</div>
 <table id="myTable">

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