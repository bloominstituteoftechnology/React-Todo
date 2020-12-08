import React from 'react';
import List from './components/TodoList';
import Form from './components/TodoForm';
import './components/Todo.css';
import TodoForm from './components/TodoForm';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      todoList: [
        {
          id: 1,
          item: 'Make coffee',
          completed: false
        },
        {
          id: 2,
          item: 'Prepare lunch',
          completed: false
        },
        {
          id: 3,
          item: 'Leave for work',
          completed: false
        }
      ],
    }

  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addToDo = (item)
  submit = e => {
    e.preventDefault();
    this.addItem({ task: this.state.text, id: Date.now(), completed: false });
    this.setState({ item: '' });

}

handleChange = e => {
    this.setState({ ...this.state,
      item: e.target.value });

}

  render() {

    return (

      <div className="App">
        
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleChange={this.handleChange}
          removeItem={this.removeItem}
        />
        <TodoList 
          addItem = {this.addItem}
          todoList = {this.state.todoList}
         />

      </div>

    );

  }

}

export default App;
