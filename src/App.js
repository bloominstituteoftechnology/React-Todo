import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css'



class App extends React.Component {
  constructor() {
    super(); 
    
    this.state = {
      todos: [ {
        task: 'Get groceries',
        id: 1,
        completed: false
      },
      {
        task: 'Go for run',
        id: 2,
        completed: false
      }],
      inputText: "",
    };
  }

 
  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, {task : this.state.inputText, id: Date.now(), completed: false}],
        inputText: "",

      });
    }
  };

  removeTodo = event => {
    event.preventDefault();
    const newTodos = [...this.state.todos];
    const a = [];
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].completed === false) {
        a.push(newTodos[i]);
      }
    }
    // newTodos.filter(task => {
    //   return (task.completed === false);
    // },
      this.setState({
        todos: [...a],
        inputText: "",
      })
    
  }
    
  handleInput = event => {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    });
  };

  //We are going to copy the current state 
  //We are going to map through the copy
  //Check if the ID of the argument matches the ID we are running through map
  //If it matches, we toggle completed
  completedTask = id => {
    const newArr = [...this.state.todos]
    newArr.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        if (todo.completed) {
          todo.task.className += 'strike';
        } else todo.task.className -= 'strike';
      }
    })
    
    this.setState({
      todos: newArr,
    })
  };
    
  

  render() {
    
    return (
      <div>
        <TodoList todos={this.state.todos} completedTask={this.completedTask}/>
        <TodoForm
          addTodo={this.addTodo}
          removeTodo={this.removeTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
