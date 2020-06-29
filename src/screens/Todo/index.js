import React, { Component } from 'react';

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
        <h1>Listar TO-DOs</h1>
        {todos.map(todo => (
          <li key={todo.id}>
            <h2>
              <strong>Título: </strong>
              {todo.title}
            </h2>
            <p>
              {todo.id}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default Todo;
