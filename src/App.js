import React from 'react';
import TodoList from "./components/TodoList";



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

//Constructor to set State~---------------------
constructor() {
  super();
  this.state = {
    todos: [{
      task: "Do Project",
      id: 1,
      completed: false
    },
  {
    task: "Cook Dinner",
    id: 2,
    completed: false
  }],
  newTodo: {
    
      task: "",
      id: 0,
      completed: false
    
    }
  }
}

//Change Handler -----------------------------------------------------------
handleChange =(event) => {
  let value = event.target.value;
  this.setState({
    newTodo: {[event.target.name]: value, id: 0, completed: false}
  })
}

//Submit -------------------------------------------------------------------------
handleSubmit = (event) => {
  event.preventDefault();

  let newList = [...this.state.todos, this.state.newTodo]
  this.setState({todos: newList})
  this.setState({newTodo: {task: '', id: 0, completed: false}});
}

//Handle Click---------------------------------------
handleClick = (id) => {
  let editList = this.state.todos.map((todo) => {
    if (todo.id === id){
      return {
        ...todo,
        completed: !todo.completed,
      }
    } else {
      return todo
    }
  })
this.setState({todos: editList})
}
//Delete--------------------------------------------------------------------------------
deleteList = (event) => {
  event.preventDefault()
  const deleteList = this.state.todos.filter((todo) => todo.completed === false)
  this.setState({todos: deleteList})
}


  render() {
    return (
      <div className = "App">
        <h2>Catherine's to-do List</h2>
        <TodoList 
        todos={this.state.todos} 
        change={this.handleChange} 
        newTodo={this.state.newTodo} 
        submit={this.handleSubmit} 
        click={this.handleClick} 
        delete={this.deleteList}
        />
      </div>
    );
  }
}

export default App;
