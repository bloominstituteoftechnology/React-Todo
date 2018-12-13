import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {id: 1, task: "Clean the house", completed: false},
  {id: 2, task: "Walk the dog", completed: false},
  {id: 3, task: "Go to the gym", completed: false}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData,
      inputText: '',
      inputTextTwo: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }
  
  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {task: this.state.inputText}],
      inputText: ''
    })
  }

  changeComplete = id => {
    console.log(this.state)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: todo.completed === 'true' ? 'false' : 'true'};
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <h2>ToDo List MVP!</h2>

        <TodoList todos={this.state.todos} changeComplete={this.changeComplete} />
        <TodoForm addTodo={this.addTodo} inputText={this.state.inputText} inputTextTwo={this.state.inputTextTwo} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
