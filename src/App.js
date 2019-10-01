import React, { Component } from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";




const listData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Go Ham',
    id: 1538514054358,
    completed: true
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      name: "Adam",
      list: listData
    };
  }
  
  toggleList = id => {
    console.log(id);
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected
          };
        } else {
          return item
        }
      })
    });
  };

  addList = listName => {
    const newList = {
      name: listName,
      id: Date.now(),
      selected: true
    };
    this.setState({
      list: [...this.state.list, newList]
    });
  };

  clearSelected = () => {
    this.setState({
      list:
      this.state.list.filter(item => item.selected)
    });
  };

  render() {
    return (
      <div className="App">
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addList={this.addList}
        />
      </div>
      <TodoList 
      list={this.state.list}
      toggleList={this.toggleList}
      clearSelected={this.clearSelected}
      listdata={this.state.listData}
      />
      </div>
    );
  }
}

export default App;


//STYLES!

//

