import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      nextTodo: {
        task: '',
        id: '',
        completed: false,
      },
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
    };
  }

  addHandler = event => {
    const list = this.state.todos.slice();
    const emptyTodo = {task: '', id: '', completed: false}
    list.push({task: this.state.nextTodo.task, id: this.state.nextTodo.id, completed: this.state.nextTodo.completed});
    this.setState({todos: list, nextTodo: emptyTodo});
  }

  textHandler = event => {
    const nextTodo = {
      task: event.target.value,
      id: Math.random(),
      completed: false
    };
    this.setState({nextTodo: nextTodo});
    //event.target.value = '';
  };
  
  completeHandler = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todos});
  };


  render() {
    return (
      <div>
        <h1>Holy Crap!</h1>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoItems={this.state.todos} completeHandler={this.completeHandler} />
        <TodoForm  addHandler={this.addHandler} textHandler={this.textHandler} next={this.state.nextTodo.task} />
      </div>
    );
  }
}

export default App;
