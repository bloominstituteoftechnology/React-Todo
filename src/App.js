import React from 'react';
import TodoList from "../src/components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state= {
      todos: [
        {todo: "Do today's Homework"},
        {todo: "Learn more about React"},
        {todo: "Start College work"}
      ],
      task: "",
      id: "",
      newTask:""
    }
  }

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
  }

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {todo: this.state.newTask}
      ],
      newTask: ""
    });
  }


  
  render() {
    return (
      <div>
        <h1>Todo List:-</h1>

        <div>
          <TodoList
            todos={this.state.todos}
            task={this.state.task}
            newTask={this.state.newTask}
            class={this.state.class}
            changeHandler={this.changeHandler}
            addNewTask={this.addNewTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
