import React from "react";
import ToDoList from "./components/TodoComponents/ToDoList";
import ToDoForm from "./components/TodoComponents/ToDoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
      todo: ""
    };
  }

  addNewObject = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      id: Date.now(),
      task: this.state.todo,
      completed: false
    })
    this.setState( {todos, todo:""} );
  }

updateTodoTask = event => this.setState( { [event.target.name]: event.target.value } )

  render() {
    return (
      <div>

        <ToDoList todos = { this.state.todos } />

        <ToDoForm 
          value = { this.state.todo }
          handleUpdateTask = { this.updateTodoTask }
          handleAddNew = { this.addNewObject }
        />

      </div>
    );
  }
}



export default App;


