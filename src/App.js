import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'


// design `App` to be the parent component of your application
class App extends React.Component {
  // state store
  constructor() {
    super();
    this.state = {
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
      ],
      todo: ''
    }
  }

  // change handlers 
  // ADD TODO
  addTodo = event => {
    event.preventDefault();
    // here we are making a new todos array
    const todos = this.state.todos.slice();
    // pushing new todo onto sliced todos array
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  // TODO Change
  changeTodo = event => this.setState({ [event.target.name]: event.target.value });


 // the this keyword gives you access to the constructor
// when there are updates to state render gets called again
// render method
  render() {
    return (
      <div>
      <TodoList
        todos={this.state.todos}
        
       />
       <TodoForm
        value={this.state.todo}
        handleAddTodo={this.addTodo}
        handleTodoChange={this.changeTodo}
      />
      </div>
    );
  }
}

export default App;
