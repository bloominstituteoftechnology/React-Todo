import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { EventEmitter } from './utils.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
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
      inputText: '',
    }
    EventEmitter.subscribe('toggleTodo', (text) => this.toggleTodo(text))
	EventEmitter.subscribe('addTodo', (event) => this.addTodo(event))
	EventEmitter.subscribe('clear', () => this.clear())
  }

  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleTodo = task => {
    this.setState({
      todo: this.state.todo.map(
        item => item.task === task ? Object.assign(item, { completed: !item.completed }) : item
      )
    })
  }

  clear = () => {
	this.setState({
	  todo: this.state.todo.filter(item => !item.completed)
	})
  }

  render() {
    return (
      <div>
        <TodoList 
          todo={this.state.todo}
        />
        <TodoForm
          inputText={this.state.inputText}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
