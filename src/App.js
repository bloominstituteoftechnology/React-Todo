import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      Todos: [
        {
          task: 'Wake Up', id: 1528817077286, completed: false
        },
        {
          task: 'Fall Out of Bed', id: 1528817084358, completed: false
        },
        {
          task: 'Drag a Comb Across My Head', id: 16298271854459, completed: false
        }
      ],
      Todo: '',
    };
  }

  newTodo = (e) => {
    this.setState({Todo: e.target.value});
  }

  addTask = (e) => {
    /*console.log('Button clicked!');*/
    if (this.Todo !== ''){
    const tempTodos = this.state.Todos.slice();

      tempTodos.push({ task: this.state.Todo, id: Date.now(), completed: false, });
      this.setState({Todos: tempTodos, Todo: ''});
      }
  }

  strikeThrough = (id) => {
    let todos = this.state.Todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  }



  /*clearCompleted = (e) => {
    let todos = this.state.Todos.slice();
    todos = todos.filter(Todo => !Todo.completed);
    this.setState({ todos });
  }*/

  clearCompleted = event => {
    /*event.preventDefault();*/
    let Todos = this.state.Todos.slice();
    Todos = Todos.filter(Todo => !Todo.completed);
    this.setState({ Todos });
  }

  render() {
    return (
      <div>
        <h1>Todos List</h1>
        <TodoList todos={this.state.Todos} toggleStrike={this.strikeThrough}/>
        <TodoForm changeInput={this.newTodo} addTodo={this.addTask} clearCompleted={this.clearCompleted} vOS={this.state.Todo}/>
      </div>


    );
  }
}

export default App;
