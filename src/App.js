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
    if(this.state.newTask === '') {
      return
    }
    this.setState({todoData: [
      ...this.state.todoData,
      { task: this.state.newTask, id:Math.random(), completed: false}
    ],
    newTask: ''
    });
    console.log(this.state.todoData)
  }
  render() {
    // console.log(this.state);  Checks This.state is working 
    return (
      <div>
        <TodoForm 
        addTask={this.addTask}
        changeHandler={this.changeHandler}
        newTask={this.state.newTask}
        />
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
