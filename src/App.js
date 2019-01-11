import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoHeading from './components/TodoComponents/TodoHeading';

import './App.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  },
  {
    task: 'Eat',
    id: 15243434084358,
    completed: true
  },
  {
    task: 'Clean',
    id: 15234344358,
    completed: false
  },
  {
    task: 'Shopping',
    id: 1528834344438,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: data,
      todo: ''
    }
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  addTodo = ev => {
    ev.preventDefault()
    console.log(ev.target)
    if(this.state.todo === ''){
      alert('Enter an item you have Todo')
    } else {
      this.setState({ 
        data: [
          ...this.state.data, {task: this.state.todo, id: Date.now(), completed: false}], todo: '' })
    }
  }

  itemClicked = (id) => {
    this.setState({
      data: this.state.data.map((e) => {
        if( id !== e.id) {
          return e
        } else {
          return {
            ...e,
            completed: !e.completed
          }
        }
      },
      )
    })
  }

  clearTodo = ev => {
    ev.preventDefault();
    this.setState({
      data: this.state.data.filter((e) => !e.completed)
    })
  }
  render() {
    return (
      <div className='container'>
        <h2>To Do List</h2>
        <TodoHeading data={this.state.data}/>
        <TodoList 
          data={this.state.data}
          itemClicked={this.itemClicked}
        />
        <TodoForm 
          todo={this.state.todo} 
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
