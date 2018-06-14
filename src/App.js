import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
   super();
   this.state = {
    inputTask: '',
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

  onInputChange = e => {
    this.setState({inputTask: e.target.value});
  };

  onAddClick = (e) => {
    e.preventDefault();
    this.addTodo();
    console.log('Add clicked');
  };

  onInputEnter = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.addTodo();
      console.log('Pressed enter');
    }
  };

  addTodo() {
    const newTask = this.state.inputTask.trim();
    const newTodos = this.state.todos.slice();
    const randomId = Number(`${Date.now()}${newTodos.length}`);
    this.setState({inputTask: ''});
    if (newTask.length === 0) return false;
    newTodos.push({
      task: newTask,
      id: randomId,
      completed: false
    });
    this.setState({todos: newTodos});
    console.log('Todo added');
  }

  onTodoClick = (e) => {
    const id = e.target.dataset.id;
    const newTodos = this.state.todos.slice();
    newTodos.forEach(todo => {
      if (todo.id === Number(id)) {
        console.log(todo.completed);
        todo.completed = !todo.completed;
      }
    });
    this.setState({todos: newTodos});
    console.log('Set completed state of', id);
  };

  onClearClick = (e) => {
    e.preventDefault();
    let newTodos = this.state.todos.slice();
    newTodos = newTodos.filter(todo => todo.completed === false);
    this.setState({todos: newTodos});
    console.log('Completed cleared', newTodos);
  }

  render() {
    return (
      <div>
      <TodoList 
        todos={this.state.todos} 
        onTodoClick={this.onTodoClick} 
      />
      <TodoForm 
        inputTask={this.state.inputTask} 
        onInputChange={this.onInputChange} 
        onInputEnter={this.onInputEnter} 
        onAddClick={this.onAddClick} 
        onClearClick={this.onClearClick}
      />
      </div>
    );
  }
}

export default App;
