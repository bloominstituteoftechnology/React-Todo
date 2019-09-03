import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "task goes here",
          id: "1234",
          completed: false
        },
        {
          task: "task 2 goes here",
          id: "4321",
          completed: true
        }
      ]
    }
  }

  toggleCompleted = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    });
  }
    
  // handleChange = (event) => {
  //   // console.log("Change handler activated!");
  //   this.setState({ [event.target.name]: event.target.value});
  // };

addTodo = task => {
  this.setState({
    todos: [...this.state.todos, {
      task: task,
      id: Date.now(),
      completed: false
    }]
  })
}

  handleDoubleClick = () => {
    console.log("Double Click handler activated!")
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          listArray={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          addTodo={this.addTodo}
          
          handleChange={this.handleChange} 
          handleClick={this.handleClick}
          handleDoubleClick={this.handleDoubleClick}
         />
      </div>
    );
  }
}

export default App;
