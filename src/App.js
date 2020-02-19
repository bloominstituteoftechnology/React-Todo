import React from 'react';
import { chores } from './data';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/SearchForm';
import ls from 'local-storage';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // the constructor intializes all of the properties and methods in App
    super();
    // super intializes all of the properties and methods in React Component
    this.state = {
      chores: chores
    }; 

  }

  addItem = itemText => {
    const newItem = {
      name : itemText,
      completed : false,
      id: Date.now(),
      changed: false
    };

    // why is calling this okay in this context?

  this.setState({
    chores: [...this.state.chores, newItem]
  });
}

 toggleItem = itemId => {

  // Remember the setState function works exactly how it does with hooks: it is used to set the value of the state of each component

    this.setState({
      chores: this.state.chores.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed : !item.completed // I'm pretty sure this changes purchased to the value opposite of what is currently is
          };
        }
        return item;
      })
    });
  }

  clearCompleted = (e) => {

     e.preventDefault();
      this.setState({
         chores: this.state.chores.filter(chore => chore.completed === false)
    });
      console.log(this.state.chores);
    }


  render() {
    return (
      <div>
        <h1>Chores List</h1>
          <TodoForm 
          addItem={this.addItem}/>
          <br/>
          <TodoList 
          toggleItem={this.toggleItem}
          chores={this.state.chores}
          changed={this.state.changed}
          clearCompleted={this.clearCompleted}/>
          <SearchForm 
          toggleItem={this.toggleItem}
          chores={this.state.chores}
          changed={this.state.changed}
          clearCompleted={this.clearCompleted}/>
          <br/>
          <br></br>
      </div>
    );
  }
}

export default App;