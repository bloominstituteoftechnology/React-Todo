import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todoList: [
        {
          task: '',
          id: '',
          completed: false
        }
      ],
      text: "",
    };
  };

  inputHandle = (event) => {
    this.setState({
      text: event.target.value,
    })
  };

  clickHandle = (event) => {
    const newTodo = {
      task: this.state.text,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      text: "",
    })
  }

  handleClick = (todoId) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  clearCompleted = (event) => {
    this.setState({
      todoList: this.state.todoList.filter(task => {
          return task.completed === false
        }
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm
          text={this.state.text}  
          inputHandle={this.inputHandle}
          clickHandle={this.clickHandle}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          array={this.state.todoList}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
