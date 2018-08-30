import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state = {
        todoList: [],
      }
    }

    toggleCompleteBoolean = (bool, todoFromIcons) => {
      todoFromIcons.complete = !todoFromIcons.complete;
      console.log(todoFromIcons);
      this.setState({
        todoList: this.state.todoList.filter(todo => todo.complete === false)
      })
    }

    addTodo = (title, time, body, complete) => {
      // using the result of the addTodo function bubbled up from TodoForm, I append a new todo to the end of the current todoList array in this components state
        if(title && time && body){
          this.setState({
            todoList: [...this.state.todoList, {title, time, body, complete}]
          })
        } else {
          return null;
        }
      }

    render() {
      return (
          <div className="container">
            <h1>App Component</h1>
            <TodoList toggleCompleteBoolean={this.toggleCompleteBoolean} todoList={this.state.todoList} addTodo={this.addTodo} />
          </div>
      );
    }
}

export default App;
