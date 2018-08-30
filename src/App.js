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

  addTodo = event => {
    event.preventDefault();
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

  completeTask = (id) => {
    let todos = this.state.todo.slice();
    console.log(todos);

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    })

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
        />
      </div>
    );
  }
}

export default App;
