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
          completed: false
        }
      ],
    }
  }

  changeHandler = (event) => {
    this.setState({
      todo: event.target.value
    })
    console.log(this.state.todo)
  }

  submitHander = (event) => {
    event.preventDefault();
    const newItem = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem],
      todo: ''
    })
  }

  markComplete = (markedItem) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === markedItem.id) {
          return {
            ...item,
            completed: !item.completed
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
          todo={this.state.todo}
          changeHandler={this.changeHandler}

        />
        <TodoList todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
