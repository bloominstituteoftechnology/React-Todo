import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'



const todoItems = [
  {
    task: "Take dog for walk",
    id: Date.now(),
    completed: false
  },
  {
    task: "Grocery shopping",
    id: Date.now(),
    completed: false
  },
  {
    task: "Clean closet",
    id: Date.now(),
    completed: false
  },
  {
    task: "Make dinner",
    id: Date.now(),
    completed: false
  },
  {
    task: "Learn React",
    id: Date.now(),
    completed: false
  }

]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: todoItems,
      task: ""
    };
  }
  handleChanges = ev =>{
    this.setState({task: ev.target.value});
  };

  addNewTodo = ev => {
    ev.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {task: this.state.task}
      ], task: ""
    })


  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <TodoList todoItemList={this.state.todo} />
        <TodoForm addNewTodo={this.addNewTodo} 
                  handleChanges={this.handleChanges}
                  />
      </div>
    );
  }
}

export default App;
