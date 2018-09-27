import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      todos: [
        {
          task: 'Give the dog a bath',
          id: 1,
          completed: false,
        }, {
          task: 'Paint the walls',
          id: 2,
          completed: false,
        }
    ]
  }
}

// Need a function to add a new todo object to the todo array
addToDo = (newTask, id) => {
  // Create a new todo object based on a given task and id
  const todo = {
    task: `${newTask}`,
    id: id,
    completed: false,
  }

  // Get the todo array and add the new todo to the end using push()
  const todos = this.state.todos;
  todos.push(todo)

  // Set the current state with the new todo array
  this.setState({todos})
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Need a handler that takes the input from the form and creates new todo
addToDoHandler = (element) => {

  // This prevents the page from being refreshed, otherwise you lose everything when you submit
  element.preventDefault();

  // Get the input from the node immediately preceding the current one. See: https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling
  const input = element.target.previousSibling.value;
  
  // Set the current date as the id for the todo
  const id = Date.now();

  // Return the newly created object and set the state with it using addToDo function
  return this.addToDo(input, id)
}

// Need a function that toggles the task as a completed or unfinished
toggleComplete = (element) => {

    // Get the current todo (the one being clicked)
    const current = element.target;
    
    // Get the todo array so that the completed state of the current todo can be toggled between true and false.
    // Iterate through using .map
    const todos = this.state.todos.map(todo => {

      // Check if current todo matches the todo id
      // Convert current.id to a number since it's currently a string
      if (Number(current.id) === todo.id) {
        // Add a class that strikes through the word
        current.classList.toggle('completed');

        // Sets completed to whatever the opposite value is
        todo.completed = !todo.completed;
      }

      // Just return the todo if it doesn't match the current target
      return todo;
    });

     // Set the current state with the new todo array
    this.setState({todos})
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Need a function that removes completed todos
removeComplete = (element) => {

    // This prevents the page from being refreshed, otherwise you lose everything when you submit
    element.preventDefault();

    // Create an empty array to hold incomplete items
    let filtered = [];

    // Get all of the todos with the completed attribute set to false
    // Use something similar to toggleComplete but use const todos = this.state.todos.filter instead
    let todos = this.state.todos.filter(todo => {
      
      // If todo.completed is false then it adds it to the filtered array
      if(todo.completed !== true) {
        filtered.push(todo);
      }

      // Return the array
      return filtered;
    });

    // Set the current state with the new todo array
    todos = filtered;
    this.setState({todos})
    localStorage.setItem("todos", JSON.stringify(todos));
}

hydrateStateWithLocalStorage() {
  // Iterate through all items in state
  // This was extremely helpful: https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2
  for (let key in this.state) {
    // Check to see if the key exists in localStorage. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);

      // Parse the localStorage string and setState
      try {
        value = JSON.parse(value);
        this.setState({ [key]: value })
      } catch (e) {
        this.setState({ [key]: value })
      }
    }
  }
}

componentDidMount() {
  this.hydrateStateWithLocalStorage();
}

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList key={this.state.todos.id} todos={this.state.todos} toggleComplete={this.toggleComplete} />
        <TodoForm submit={this.addToDoHandler} removeComplete={this.removeComplete}/>
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
