import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }

      ]
    }
  }

  render() {
    return (
      <div>
        <h2>TODO LIST</h2>
        <div className="todo-list-wrapper">
          {this.state.todos.map((todo,index) => {
            return <p key={todo.id}>{todo.task}</p>
          })}
        </div>
      </div>
    );
  }
}

export default App;
