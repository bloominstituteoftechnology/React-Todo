import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css'

const defaultValues = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      task:defaultValues
    }
  }

  handleItemToggle = (itemId) => {
    this.setState({
      task: this.state.task.map(item => {
        if(item.id === itemId) {
          return {
            ...item, completed:!item.completed
          }
        }
        return(item);
      })
    });
  }

  handleItemAdd = (itemName) => {
    const newAddedItem = {
      task: itemName,
      id: this.state.task.length,
      completed: false
    };

    const newItems = [...this.state.task, newAddedItem ];
    this.setState({
      task:newItems
    });
  }

  handleItemCompleted = () => {
    const newItems = this.state.task.filter(item => {
      return(!item.completed);
    });
    this.setState({
      task:newItems
    })
  }

  render() {
    return (
      <div className='main-container'>
        <div>
          <h2>Welcome to your To-do App!</h2>
          <TodoForm handleItemAdd={this.handleItemAdd} />
        </div>
        <div>
          <TodoList task={this.state.task} handleItemCompleted={this.handleItemCompleted} handleItemToggle={this.handleItemToggle} />
        </div>
      </div>
    );
  }
}

export default App;
