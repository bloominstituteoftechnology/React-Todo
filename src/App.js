import React from 'react';
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todos: [{
        task: "make todo list",
        id: Date.now(),
        completed: false
      }]
    };
  }
  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = taskItem => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskItem,
          id: Date.now(),
          completed: false
        }
      ]
    })
  };

  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} 
        toggleCompleted={this.toggleCompleted} 
        addTodo={this.addTodo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
