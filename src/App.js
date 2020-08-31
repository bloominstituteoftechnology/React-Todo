import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ],
      inputValue: '',
    }
  }

  changeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
    console.log(this.state.inputValue)
  }

  submitHander = (event) => {
    event.preventDefault();
    const newItem = {
      task: this.state.inputValue,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem],
      inputValue: ''
    })
  }

  markComplete = (markedItem) => {
    console.log(markedItem)
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === markedItem.id) {
          return {
            ...item,
            completed: true
          }
        }
        else {
          return item;
        }
      })
    })
  }

  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          submitHander={this.submitHander}
          inputValue={this.state.inputValue}
          changeHandler={this.changeHandler}

        />
        <TodoList todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
