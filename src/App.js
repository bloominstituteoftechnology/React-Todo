import React from 'react';

const todoList = [
  {
    task: 'Get train to Sheffield',
    id: 0,
    completed: false 
  },
  {
    task: 'Drinking a coffee',
    id: 1,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state = {
      todos: todoList,
      todoText: ""
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    console.log(this.state.todoText);
  }

  setTodo = (event) => {
    this.setState({
      todoText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <form>
          <input type="text" placeholder="Enter Todos" onChange={(event) => this.setTodo(event)}/>
          <button onClick={(event) => this.addTodo(event)}>Add</button>
        </form>
        <div className ="todos-container">
          Todos go here
        </div>
      </div>
    );
  }
}

export default App;
