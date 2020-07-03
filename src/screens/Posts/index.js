import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import api from '../../api';
import './style.css';
import '../../style.css'
import { FiArrowLeft  } from 'react-icons/fi'

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
  <table>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Titulo</th>

    </tr>
  

    {posts.map(post => (

     <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
    </tr>
    
    ))}
    
  </table>

</div>
);
};
};

export default Posts;