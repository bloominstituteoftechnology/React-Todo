import React from 'react';

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

const App = () => (
  <div>
    <h2>Todo App</h2>

  </div>
);

export default App;
