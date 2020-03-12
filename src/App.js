import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';



const thingsToDo =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false 

  },
 {
   task: "Bake Cookies",
   id: 1528817084358,
   completed: false
 }

];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
constructor() {
  super();
  this.state = {
    thingsToDo
  };
}

toggleCompleted = itemId => {
  console.log("dc: app.js togglecompleted: itemId", itemId);
  this.setState({
    thingsToDo: this.state.thingsToDo.map(item => {
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

addItem = itemName => {
  this.setState({
    thingsToDo: [
      ...this.state.thingsToDo,
      {
        task: itemName,
        id: Date.now(),
        completed: false
      }
    ]
  });
};

clearCompleted = () => {
  console.log("dc: app.js clearCompleted");
  this.setState({
    thingsToDo: this.state.thingsToDo.filter(item => {
      return !item.completed;
    })
  });
};





  render() {
    return (
      <div className=" App">
      <div className="header">
        <h1>Welcome to your Todo App! </h1>
        <TodoForm addItem={this.addItem} />
      </div>
      <TodoList
      thingsToDo={this.state.thingsToDo}
      toggleCompleted={this.toggleCompleted}
      clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
