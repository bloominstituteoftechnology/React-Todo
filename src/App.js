import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [
      {
        task: 'Tasks',
        completed: false
      },
    ]
  }

  addTask = (event) => {
    const todos = this.state.todos.slice();
    todos.push({
      task: this.state.task.concat([{ task: '' }]),
      completed: false
    });

    this.setState({ todos: todos });
    console.log(this.state);
  };

  render() {
    return (
      <TodoList
        todo={this.state.todos}
        clicked={this.addTask}
        task={this.addTask} />
    );
  }
}

export default App;
