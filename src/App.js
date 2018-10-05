import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {  //the following is the initial state, the data my App will work on; jump down to the render-return to proceed
      Todos:      [
        {
          task: 'Organize Garage', id: 1528817077286, completed: false
        },
        {
          task: 'Bake Cookies', id: 1528817084358, completed: false
        }
      ],
      Todo: ' ',
    };
  }

  newTodo = (event) => {
    this.setState({Todo: event.target.value})
  }

  addTask = (event) => {
    event.preventDefault();
    if (this.Todo !== ' ') {
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

  clearCompleted = (event) => {
    let Todos = this.state.Todos.slice();
    Todos = Todos.filter(Todo => !Todo.completed);
    this.setState({ Todos });
  }

  render() { //this will render to the DOM what's in the virtual DOM, unless I'm much mistaken
    return (  
      <div className="appCont">
          <h1>todo list</h1> {/*a standard h1*/}
          <h2>sh*t that's gotta get done</h2> {/*a little cheek*/}
          <TodoList todos={this.state.Todos} toggleStrike={this.strikeThrough} /> {/*renders the todo list; passes its props to the TodoList component*/} 
          <TodoForm changeInput={this.newTodo} addTodo={this.addTask} clearCompleted={this.clearCompleted} vOS={this.state.Todo}/>{/*renders the form*/}
      </div>
    );
  }
}

export default App;
