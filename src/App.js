import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
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
        },
      ],
      newTask: '',
      inputText: '',
    }
  }

  changeHandler = event => {
    this.setState({ newTask: event.target.value });
  };

  addTask = event => {
    event.preventDefault();
    this.setState({todoData: [
      ...this.state.todoData,
      { task: this.state.newTask, id:Math.random(), completed: false}
    ],
    newTask: ''
    });
  }

  render() {
    // console.log(this.state);  Checks This.state is working 
    return (
      <div>
        <TodoList todoData={this.state.todoData} />
        <TodoForm 
        addTask={this.addTask}
        changeHandler={this.changeHandler}
        newTask={this.state.newTask}
        />
      </div>
    );
  }
}

export default App;
