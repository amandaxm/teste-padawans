import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import api from '../../api';
import '../../style.css'
import { FiArrowLeft  } from 'react-icons/fi';

function myFunction() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");

   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     
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

class Posts extends Component {
   state = {
posts: [],
}
async componentDidMount() {
const response = await api.get('/posts');
this.setState({ posts: response.data });
}
render() {
const { posts } = this.state;
console.log(posts.length);
return (
<div>
   <ul>
      <li>
         <Link className="link" to='/'>
         <FiArrowLeft size={16} color="rgb(95, 52, 115)" />
         Menu</Link>
      </li>
   </ul>

   <h1>Posts</h1>
   <div className="field">

   <input type="text" id="myInput" onKeyUp={myFunction} placeHolder="Procura por título.."></input>
</div>
   <table id="myTable">
   <tbody>

      <tr id="header">
         <th scope="col">Título</th>
         <th scope="col">Body</th>
      </tr>
      {posts.map(post => (
      <tr>
         <td>{post.title}</td>
         <td>{post.body}</td>
      </tr>
      ))}
  </tbody>
   </table>
</div>
);
};
};
export default Posts;