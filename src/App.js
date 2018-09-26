import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

//created an array with all the data outside of the class
let todoArr = [
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

class App extends React.Component {
  constructor() {
    super();

    //set the state of the todoItems to the array that I created outside of the class
    this.state = {
      todoItems : todoArr, 
    };
  };

  //the add function modifies the original array with thr value of the input, 
  //then renders the list again by calling this.setState and setting the
  // state to the newly modified array. Then it clears the input field.
  add = () => {
    let val = document.getElementById('inputForm')
    todoArr.push({
      task: val.value,
      id: Date.now(),
      completed: false,
    });
      this.setState({todoItems : todoArr});
      val.value = '';
  }

  //this checks for when the key event is an 'Enter' key and invokes the add function
  EnterHandler = (e) => {
    if (e.key === 'Enter') {
      this.add();
    }
  }

  //this function just takes the array and sets it to an empty array
  clearAll = () => {
      todoArr = [];
    this.setState({todoItems : todoArr});
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList listArr = {this.state.todoItems} />
        <TodoForm add={this.add} handler = {this.EnterHandler} clearAll = {this.clearAll}/>
      </div>
    );
  }
}

export default App;
