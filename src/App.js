import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      todolist: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
      ],
      //newTodo: "",
    };
  }
  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todolist: [
        ...this.state.todolist,
        { task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      newTodo: ""
    });
  }

 changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div>
        <h1> My To-Do List</h1>
        <TodoList 
        todolist={this.state.todolist}/>

        <TodoForm 
        todolist={this.state.todolist}
        addNewTodo={this.addNewTodo}
        newTodo={this.state.newTodo}
        changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;