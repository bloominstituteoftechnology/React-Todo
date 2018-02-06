import React from 'react';
import Component from 'react';

import { render } from 'react-dom';

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = {
      todoItems: ['Learn React', 'Make awesome web apps', 'Get attention for awesome programming', 'Make lots of money'],
    };
  }

  render() {
    return (
      <ul>
        {
          this.state.todoItems.map((todo) => {
            return (
              <li>
                {todo}
              </li>
            );
          })
        }
      </ul>
    )
  }
}

export default TodoList;