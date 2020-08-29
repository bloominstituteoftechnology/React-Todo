import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const WhatToDo =[
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
    task: 'Study React 2',
    id: 1528817012345,
    done: false
  },
  {
    task: 'Practic More JS',
    id: 1528817067890,
    done: false
  },
  {
    task: 'Bake Cake',
    id: 1528817010293,
    done: false
  },
  {
    task: 'Go Shopping',
    id: 1528817048576,
    done: false
  },
  {
    task: 'Watch Movie',
    id: 1528817005917,
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
          return {
            ...item,
            done: false}


    })
    })}

    addItem = itemname => {
      const newItem = {
        task: itemname,
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