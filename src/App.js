import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
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
      newTodo: ''
    }; // this.state
  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  addNewTodo = event => {
    event.preventDefault();

    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: this.state.newTodo }
      ],
      newTodo: ''
    });
  };

  render() {
    console.log(this.state.todoData)
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoData={this.state.todoData} />
        <TodoForm
          // input field
          inputTodo={this.state.newTodo}
          changeInput={this.changeInput}
          newTodo={this.state.newTodo}

          // Add Todo button
          addNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
