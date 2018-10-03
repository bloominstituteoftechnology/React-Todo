import React from 'react';
import Todo from './components/TodoComponents/TodoList'
import InputField from './components/TodoComponents/TodoForm'



const todoListArray = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  },
  {
    task: 'Eat Food',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: todoListArray,
      random: ""
    }

    // handleSingleClickEvent = () => alert("Single Click Event Triggered");

    // handleInputChange = event => this.setState( {random: event.target.value} )
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        {/* <h2 onClick={this.handleSingleClickEvent}>Todo List: MVP</h2>
        {this.state.todoList.map(item => {
          return (
            <div>Task: {item.task}</div>
          )
        })} */}
        {/* <Todo />
        <InputField onChange={this.handleInputChange}/> */}

        {/* <TodoList propsTodoList={this.state.todoList} /> */}
        {/* {todoListArray.map(items => <div>To Do: {items.task}</div>)} */}
        {this.state.todoList.map(items => <Todo propsTodoList={items.task} />)}
      </div>
    );
  }
}

export default App;
