import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      inputText: ""
    };
  }

  // Add a todo item
  addTodo = event => {
    // Prevent page from refreshing
    event.preventDefault();

    /**
     *  Check if input text is empty, if not, set the inputText to the
     *  value the user inputed.
     */
    if (this.state.inputText) {
      this.setState({
        todo: [...this.state.todo,{
          task: this.state.inputText,
          id: Date.now(),
          completed: false}],

        inputText: ""
      });
    }
  };

  // Toggle the todo's completed bool
  completeTask = (id) => {
    // Slice the todo into todos
    let todos = this.state.todo.slice();

    /**
     *  Map the todos into a new array and check the id's if
     *  they match. If so, toggle the completed property and
     *  set the todo to the todos array.
     */
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.setState({todo: todos})
      }
      else {
        return todo;
      }
    })

  }

  // Remove the completed Todos
  removeCompleted = (event) => {
    // Prevent page from refreshing
    event.preventDefault();
    let todos = this.state.todo.slice();

    todos = todos.filter(todo => !todo.completed);
    this.setState({todo: todos});

  }

  // Handles the Todo's input form text input event
  handleInput = event => {
    // Set the inputText state
    this.setState({
      inputText: event.target.value
    });

    // Check if 'Enter' is pressed and then add the todo
    if (event.charCode === 13) {
      this.addTodo(event);
    }
    
  };

  render() {
    return (
      <div>
        <div className="todo">
          <TodoList 
            todo={this.state.todo}
            completeTask={this.completeTask}
          />
        </div>
        
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
