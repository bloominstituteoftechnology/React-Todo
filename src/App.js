import React from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      toDoInput: "",
      placeholder: "...todo",
    };
  }

  addToDo = event => {
    event.preventDefault();
    if (this.state.toDoInput) {
        //set task to input
      const task = this.state.toDoInput;
        //set id to date
      const id = Date.now();
        //creating new to do object with task, id, and completed
      const newToDo = {task: task, id: id, completed: false};
   

      this.setState({
        todos: [...this.state.todos, newToDo],
        toDoInput: ''
      });
    }
  };

  handleInput = event => {
    this.setState({
      toDoInput: event.target.value
    });
  };

  clear = event => {
    event.preventDefault();
    let filteredArray = this.state.toDo.filter(todo => this.state.toDo.completed === false)
    this.setState({
      toDo: filteredArray,
    });
  };

  itemCompleted = id => {
    let newToDoArray = [...this.state.todos];
    newToDoArray = newToDoArray.map(todo => {
      if(todo.id ===  id){
        todo.completed = !todo.completed;
        return todo;
      } else {return todo}
    })
    this.setState({newToDoArray});
  }
  



  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <ToDoList 
        todos={this.state.todos} 
        itemCompleted={this.itemCompleted} 
        />
        <ToDoForm
          addToDo={this.addToDo}
          toDoInput={this.state.toDoInput}
          handleInput={this.handleInput}
          clear={this.clear}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default App;
