import React from 'react';
import ToDoList from './components/ToDoComponents/ToDoList.js';
import ToDoForm from './components/ToDoComponents/ToDoForm.js';

class App extends React.Component {
  constructor(init) {
    super(...arguments);
    this.state = {
      inputText: '',
      toDoList: [
        {description:'asdf'}
      ]
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List: MVP!</h2>
        <ToDoList
          toDoList={this.state.toDoList}
          handleToggle={this.toggleToDo}
        />
        <ToDoForm
          inputText={this.state.inputText}
          handleChange={this.changeInput}
          handleAdd={this.add}
          handleClear={this.clear}
        />
      </div>
    );
  }
  add = eventClick => {
    eventClick.preventDefault();
    const newTask = {
      description: this.state.inputText
    };
    this.setState({
      toDoList: [...this.state.toDoList, newTask],
      inputText: ''
    });
  }
  clear = eventClick => {
    eventClick.preventDefault();
  }
  toggleToDo = eventClick => {
    eventClick.preventDefault();
    console.log('asdf')
    this.setState({
      toDoList: [...this.state.toDoList, Math.random()]
    });
  }
  changeInput = eventChange => {
    eventChange.preventDefault();
    this.setState({
      inputText: eventChange.target.value
    });
  }
}

export default App;
