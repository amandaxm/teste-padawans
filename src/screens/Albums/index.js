import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { FiArrowLeft  } from 'react-icons/fi'
import api from '../../api';


function myFunction() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[1];
     
     console.log('Rodei');
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

class Albums extends Component {
state = {
albums: [],
}
async componentDidMount() {
const response = await api.get('/albums');
this.setState({ albums: response.data });
}
render() {
const { albums } = this.state;
return (
<div>
   <ul>
      <li>
         <Link className="link" to='/'>
         <FiArrowLeft size={16} color="rgb(95, 52, 115)" />
         Menu</Link> 
      </li>
   </ul>
   <h1>Albuns</h1>
   <div className="field">

<input type="text" id="myInput" onKeyUp={myFunction} placeHolder="Procura por título.."></input>
</div>
 <table id="myTable">

      <tr>
         <th scope="col">Id</th>
         <th scope="col">Titulo</th>
      </tr>
      {albums.map(album => (
      <tr>
         <td>
            {album.id}            
         </td>
         <td>
            {album.title}            
         </td>
      </tr>
      ))}
   </table>
</div>
);
};
};
export default Albums;