import React from 'react';
// import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
const LearReactClass =[
  {
    task: "Run create react app",
    id:1234,
    completed:false
  },
  {
    task: "Run npm start",
    id:12345,
    completed:false
  },
  {
    task: "Delete trash",
    id:12346,
    completed:false
  },
  {
    task: "Create  component folder",
    id:12347,
    completed:false
  },
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor( ){
   super();
   this.state ={
    LearReactClass
   };
 }
 clearCompleted = e => {
  e.preventDefault();
  this.setState({
    LearReactClass: this.state.LearReactClass.filter(item => !item.completed)
  });
};

toggleItem = itemId => {
  console.log("index.js: App: toggleItem: ", itemId);
  console.log("index.js: App: this.state: ", this.state);
  //this.state.groceries;
  this.setState({
    LearReactClass: this.state.LearReactClass.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    })
  });
};
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList  LearReactClass={this.state.LearReactClass}
      toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
