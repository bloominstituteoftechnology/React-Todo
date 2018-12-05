import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = 
      {Todos:  [
      {task: 'wake up',
      id: 1528817077286,
      completed: false },
      {task: 'watch Star Trek',
      id: 1528817084358,
      completed: false },
    ]
  }
  }

  newTodo  = (e) => {
    this.setState({Todo: e.target.value})
    }

  addTask = (e) => {
    e.preventDefault();
    if (this.state.Todo !== ' '){
      const tempTodos = this.state.Todos.slice();
      tempTodos.push({ task: this.state.Todo, id: Date.now(), completed: false, })
      this.setState({Todos: tempTodos, Todo: ' '});
    }
  }

  strikeThrough = (id) => {
    let todos = this.state.Todos.slice();
    todos = todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        this.setState({ todos })
      }
    }
    )
  }

  clearCompleted = (e) => {
    let Todos = this.state.Todos.slice();
    Todos = Todos.filter( Todo => !Todo.completed )
    this.setState({ Todos })
  }




  render() {
    return (
      <div className="appCont">
          <h1>todo list</h1> {/*a standard h1*/}
          <TodoList todos={this.state.Todos} toggleStrike={this.strikeThrough} /> {/*renders the todo list; passes its props to the TodoList component*/} 
          <TodoForm changeInput={this.newTodo} addTodo={this.addTask} clearCompleted={this.clearCompleted} vOS={this.state.Todo}/>{/*renders the form*/}
      </div>
    );
  }
}

export default App;
