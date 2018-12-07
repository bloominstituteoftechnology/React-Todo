import React from "react";
import ToDoList from "./components/TodoComponents/ToDoList";
import ToDoForm from "./components/TodoComponents/ToDoForm";

import "./app.css";
import yoda from "./yoda.gif";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        
      ],
      todo: ""
    };
  }




/*addNewObject takes in an event, prevents the default of that event, 
sets a variable "todos" to a copy of this.state.todos, pushes a new object with 
our data from todoForms.js then it sets the state equal to our "todos" variable

receives data from: todoforms*/

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



/*updateToDoTask takes an event in as a parameter then sets the state equal to
the data passed up from todoform. the event's target's name (task) is then set 
equal to the event's target value, in this case it receives the name task and 
the value the user typed into our input field.. since task is named the same thing
as an existing key, it changes that keys value to our target value*/
updateTodoTask = event => this.setState( { [event.target.name]: event.target.value } )



    /* listToggle creates a copy of this.state.todos using slice(), then it takes 
    todos and maps it so that it will itterate over each array and compare their
    id's with the id of the selected element, if it returns true the key (completed)
    will be flipped to true and a strikethrough style will be applied, it then 
    returns todo, if it returns false it simply returns to todo. It then will set 
    state to the todos variable we just created

  receives data (id) from: todolist.js */

  listToggle = (keyId) => {
   let todos = this.state.todos.slice();
   todos = todos.map((todo) => {
     if (todo.id === keyId) {
        todo.completed = !todo.completed;
        return todo
     } else {
       return todo
     }
   });
   this.setState({ todos })
}

removeItem = event => {
  event.preventDefault();
  let todos = this.state.todos.slice();
  todos = todos.filter(todo => !todo.completed);
  this.setState({ todos })
}

  render() {
    return (
      <div className="wrapper">

        <ToDoList 
        todos = { this.state.todos }
        handleToggle = {this.listToggle} />

        <ToDoForm 
          value = { this.state.todo }
          handleUpdateTask = { this.updateTodoTask }
          handleAddNew = { this.addNewObject }
          removeItem = { this.removeItem }
        />

      </div>
    );
  }
}



export default App;


