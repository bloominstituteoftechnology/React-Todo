import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
   super();
   this.state = {
    todos: [
      {
        task: 'Example Todo 1',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Example Todo 2',
        id: 1528817084358,
        completed: false
      }
    ]
   } 
  }

  addTask = (taskName) => {
    const newTodos = this.state.todos.slice();
    const randomId = `${Math.random()}-${newTodos.length}`;
    newTodos.push({
      task: taskName,
      id: randomId,
      complete: false
    });
    this.setState({todos: newTodos});
    console.log('Task added');
  };

  render() {
    return (
      <div>
      <TodoList todos={this.state.todos} />
      <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
