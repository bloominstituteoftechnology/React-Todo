import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  state = {
    todos: [
      'text',
      'textext',
    ],
  };

  strikeText = () => {

  };

  render() {
    return (
      <div className="Todo-List">
        <hr />
        <ul>
          {this.state.todos.map((item, i) => {
            return <Todo key={i} todo={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;