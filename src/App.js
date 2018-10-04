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

    const todoData = this.state.todoData.slice();
    todoData.push(
      {
        task: this.state.newTodo,
        id: Date.now(),
        completed: false
      }
    );

    this.setState({
      todoData: todoData,
      newTodo: ''
    })
  };

  toggleComplete = event => {
    event.preventDefault();

    const todoData = this.state.todoData;
    let targetId = Number(event.target.attributes.id.value);

    for (let i in todoData){
      if (todoData[i].id === targetId) {
        todoData[i].completed = !todoData[i].completed;
      }
    }

    this.setState({
      todoData: todoData
    });
  };

  clearCompleted = event => {
    event.preventDefault();

    let todoData = this.state.todoData;
    todoData = todoData.filter(todo => !todo.completed);
    console.log(todoData);

    this.setState({
      todoData: todoData
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList toggleComplete={this.toggleComplete} todoData={this.state.todoData} />
        <TodoForm
          // input field
          inputTodo={this.state.newTodo}
          changeInput={this.changeInput}
          newTodo={this.state.newTodo}

          // Add Todo button
          addNewTodo={this.addNewTodo}

          // Clear Completed button
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
