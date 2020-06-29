import React, { Component } from 'react';

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
        <h1>Listar os albuns</h1>
        {albums.map(album => (
          <li key={album.id}>
            <h2>
              <strong>Título: </strong>
              {album.title}
            </h2>
            <p>
              {album.id}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default Albums;
