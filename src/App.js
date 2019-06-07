import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'React Project',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Learn React',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Get a high paying job',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Make bank',
          id: Date.now(),
          completed: false
        }
      ],
      todo: 
      {
        task: '',
        id: Date.now(),
        completed: false
      }
    };
  }

  addTodo = event => {
    event.preventDefault();
    let todos = this.state.todos;
    todos.push(this.state.todo);
    this.setState({
      todos: todos,
      todo: {...this.state.todo,
      task: '' }
    });
  }

  changeTodo = event => {
    this.setState({
      todo: {...this.state.todo,
      task: event.target.value }
    });
  }
  
  toggleCompleted = id => {
    let todos = this.state.todos;
    const newTodos = todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <h1>React ToDo List: MVP</h1>
        <TodoList 
        toggleCompleted={this.toggleCompleted}
        todos={this.state.todos}/>
        <TodoForm 
        todo={this.state.todo}
        changeTodo={this.changeTodo}
        addTodo={this.addTodo}
        clearTodos={this.clearTodos}/>
      </div>
    );
  }
}

export default App;
