import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const allToDos = [
  {task: '', id: 123, completed: false},
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allToDos,
      newTask: '',
    }
  } //constructor

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      allToDos: [
        ...this.state.allToDos,
        { task: this.state.newTask }
      ],
      newTask: ''
    });
  };

  render() {
    return (
      <div className="App">
        <div className="TitleAndTodos">
          <h2>Todo List: MVP</h2>
          <TodoList 
          changeHandler={this.changeHandler}
          addNewTask = {this.addNewTask}
          newTask = {this.state.newTask}
          allToDos={this.state.allToDos}
          />
        </div>
        <div className="InputAndButtons">
        {/* inputText={this.state.inputText} ...todo*/}
        {/* changeColor={this.changeColor} Add Todo */}
        {/* changeColor={this.changeColor} Clear Completed */}

        </div>
      </div>
    ) // return
  } // render
} // class

export default App;


// Todo List: MVP
// DO XYZ
// DO ABC
// input ...todo btn Add Todo btn Clear Completed
// 
// clicking on a todo should strike it out
// 
// Your todo data should be an array of objects that look a lot like this:
// [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,             Date.now().
//     completed: false               display: block
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,               Date.now().
//     completed: false                 display: none
//   }
// ];
// The task field is the todo title that will be shown to the user.
// The completed field should default to false and will be the field that we toggle when we complete a todo.
// The id field is a unique Time Stamp that will be assigned by Date.now().
// Day 1 Challenges
// Don't focus on styling yet. We want you to worry about function over form today.
// Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
// Be sure to use the given files for building out these components.
// <App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.
// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
// <Todo /> is a component that takes in the todo data and displays the task to the screen.
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

 // constructor
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

