import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputTodo: '',
    }
  }

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { inputTodo: '' }
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo List: MVP</h1>
        </div>
        <TodoList 
          todos={this.state.todos}
        />
        <TodoForm 
          value={this.state.todo}
          changeHandler={this.changeTodo}
          handleNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
