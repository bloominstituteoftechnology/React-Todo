import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
import "./App.css";
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

addItem = (e, itemTask) => {
  e.preventDefault();
  const existing = this.state.LearReactClass.filter(
    item => item.task === itemTask
  );
  if (existing.length === 0) {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      LearReactClass: [...this.state.LearReactClass, newItem]
    });
  }
};
toggleItem = itemId => {
  console.log( "Item Id",itemId);
  console.log("state", this.state);
  
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
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
