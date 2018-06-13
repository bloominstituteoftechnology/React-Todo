import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm custompropforbutton={this.handleSubmit} customChange={this.handleChange} customValue={this.state.newLine} />
        <TodoList passedstateasprops={this.state.todoList} />
        {/* <input 
          placeholder='Add New Todo'  
          customProp={this.handleChange} />
        <button customPropForButton = {this.handleSubmit}>Submit</button> */}
      </div>
    );
  }
}

export default App;
