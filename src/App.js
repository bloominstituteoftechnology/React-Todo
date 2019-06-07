import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [ 
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
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodos: todos
    };
  }

  addItem = (newItem) => {
    const newTaskItem = {
      name: newItem,
      id: Date.now(),
      completed: false
    }

this.setState({currentTodos: [...this.state.currentTodos.newTaskItem]})

  }

  render() {
    return (
      <div className='App'>
      <div className='header'>
        <h2>Todo App!</h2>
        </div>
        <TodoList todos={this.state.currentTodos}/>
        <TodoForm addNewItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
