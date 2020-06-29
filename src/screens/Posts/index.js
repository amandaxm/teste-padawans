import React, { Component } from 'react';

import api from '../../api';
import './style.css';

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

    return (
      <div>
        <h1>Listar os posts</h1>
        <
          table class="table">
  <tr>
    <td>Coluna 1</td>
    <td>Coluna 2</td>
    <td>Coluna 3</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
 </table>
 
        {posts.map(post => (
        <table class='table'> 

        <tr>
          <th>Id</th>
        
          <th>Titulo</th>
         </tr> 
        <h6 key={post.id} >
        <tr>
            <td>
              {post.id}            
            </td>
          
            <td>
              {post.title}   
            </td>
      </tr>
     </h6> 
     </table>
 
           ))}
        
      </div>
    );
  };
};

export default Posts;
