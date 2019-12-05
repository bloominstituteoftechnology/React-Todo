import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      input: "",
      todos: [
        {
          task: "",
          id: "",
          completed: false
        }
      ]
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  addTodo = () => {
    let newTodo = {
      task: this.state.input,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      input: "",
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompletedFlag = (todoId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todoId) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed,
          }
        }else{
          return item;
        }
      })
    })
  }

  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === !true;
      })
    })
  }

  render() {
    return (
      <div className="content">
        <TodoList 
          state={this.state} 
          input={this.handleInput}
          text={this.state.input}
          add={this.addTodo} 
          remove={this.removeCompleted} 
          toggle={this.toggleCompletedFlag}
          />
      </div>
    );
  }
}

export default App;