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
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Math.random(),
          completed: false
        }
      ],
      todo: ''
    };
  }

  submitHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // this keeps track of each character typed into state
  // keeps track of changes till you hit submit then addTodo is called

  addTodo = () => {
    const todos = this.state.todos.slice(); //makes copy of state
    // const todos = [...todos]
    todos.push({ task: this.state.todo, id: Date.now(), completed: false });
    this.setState({ todos, todo: '' }); // find this property on state and replace with new todo pushed in
    // todos: todos replacing state and adding new todo to it
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          value={this.state.todo}
          addTodo={this.addTodo}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }
}
// pass down anything you want children to have access too and use that as props
export default App;
