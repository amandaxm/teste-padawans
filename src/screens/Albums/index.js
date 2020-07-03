import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { FiArrowLeft  } from 'react-icons/fi'
import api from '../../api';
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
   <table>
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