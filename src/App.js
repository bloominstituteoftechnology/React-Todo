import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"

const toDO = [
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
    super()
    this.state = {
      toDO
    }
  }

  toggleList = (itemId) => {
    console.log("AL: index.js: App: togglePurchased: itemId: ", itemId);
  this.setState({
    ...this.state,
    toDO: this.state.toDO.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};

addTask = (taskName) => {
  this.setState({
    toDO: [
      ...this.state.toDO,
      {task: taskName, completed: false, id: Date.now()}
    ]
  })
}

clearList = () => {
  this.setState({
    toDO: this.state.toDO.filter((item) => !item.completed)
  })
}

  
  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
      </div>
      <TodoList toDO = {this.state.toDO}
                toggleList= {this.toggleList}
                clearList= {this.clearList}
                />
      </div>


    );
  }
}

export default App;
