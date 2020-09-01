import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const WhatToDo =[
  {
    name: 'Study React Components',
    id: 1,
    done: false
  },
  {
    name: 'Practic More React',
    id: 2,
    done: false
  },
  {
    name: 'Fix The Shover',
    id: 3,
    done: false
  },
  {
    name: 'Water Plants',
    id: 4,
    done: false
  },
  {
    name: 'Collect Trush',
    id: 5,
    done: false
  },
  {
    name: 'Watch Movie',
    id: 6,
    done: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
    constructor() {
      super();
      this.state = {
        WhatToDo: WhatToDo,
        anotherStateProp:'' 
      };
    }
    toggleItem = id => {
      this.setState({
        WhatToDo: this.state.WhatToDo.map(item => {
          if (item.id === id) {
            return {
              ...item,
              done: !item.done
            }
            
          }else {
            return item;
          }
        })
      })
    }

    clearDone = () =>{
      
      this.setState({
      WhatToDo: this.state.WhatToDo.map(item => {
        
            if (item.done===true){
              return {item
                
            }}
          else {
          return item}
              
    })
    })}

    addItem = itemname => {
      const newItem = {
        name: itemname,
        id: new Date(),
        done: false
      };
      this.setState({
        WhatToDo: [...this.state.WhatToDo, newItem]

      })
    }
  
  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
      <TodoForm addItem={this.addItem}/>
      </div>
      <TodoList
      toggleItem={this.toggleItem}
      clearDone={this.clearDone}
      WhatToDo={this.state.WhatToDo}/>
      </div>
    );
  }
}

export default App;
