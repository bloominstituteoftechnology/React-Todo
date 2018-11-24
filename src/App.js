import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// import CharacterForm from './components/TodoComponents/TodoForm';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import { removeDotSegments } from 'uri-js';
import './components/TodoComponents/Todo.css'
import { networkFirst } from 'sw-toolbox';

const myData = [
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
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: myData,
      inputText: ''
    }
  }

  changeComplete = id => {
    this.setState({
      data: this.state.data.map(singleChar => {
        if (singleChar.id === id) {
          console.log('single char', singleChar.completed)
          return {...singleChar, 
            completed: singleChar.completed=== true ? false :
            true};
        } else {
          return singleChar;
        }
      })
    })
  }


  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      data: [...this.state.data,
      {task: this.state.inputText,
      completed: false,
      id: Date.now()}],
      inputText: ''
    })
  }

  clearComplete = event => {
    event.preventDefault();
    this.setState({
      data: this.state.data.filter(
        e => e.completed === false)
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <TodoList 
          data={this.state.data}
          changeComplete={this.changeComplete}
        />
        <TodoForm 
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          clearComplete={this.clearComplete}
        />
      </div>
    )
  }

}


export default App