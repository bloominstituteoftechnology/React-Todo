import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './app.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      newLine: '',
      todoList: 
        [
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
        ]
    }
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ newLine: e.target.value })
  }

  handleSubmit = () => {
    const copyOftodoList = this.state.todoList.slice();
    const createdNewObj = {
      task: this.state.newLine,
      id: Math.random(),
      completed: false
    }
    copyOftodoList.push(createdNewObj);
    this.setState({ todoList: copyOftodoList, newLine: '' })
  }

  handleToggleLine = (id) => {
    const copyOftodoList = this.state.todoList.slice();
    copyOftodoList.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
    })
    this.setState({ todoList: copyOftodoList })
  }

  handleClear = () => {
    const copyOftodoList = this.state.todoList.slice();
    const filtered = copyOftodoList.filter(item => !item.completed)//filter all items except completed: false
    this.setState({ todoList: filtered })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <h3 id='header' ></h3>
          <TodoForm
            customPropForSubmit={this.handleSubmit}
            customClear={this.handleClear}
            customChange={this.handleChange}
            customValue={this.state.newLine}
          />
          <TodoList
            passedToTodoList={this.state.todoList}
            handleToggle={this.handleToggleLine}
          />
        </div>
      </div>
    );
  }
}

export default App;
