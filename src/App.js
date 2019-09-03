import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.css";

 const TodoListdata = [{
    task: "Clean House",
    id: 1,
    completed: false
  },
  { 
    task: "Code App (Work)",
    id: 2,
    completed: false
  },
  {
    task: "Exercise",
    id: 3, 
    completed: false
  },
  {
    task: "Spend time with family",
    id: 4, 
    completed: false
  },
  {
    task: "Work on building Assets", 
    id: 5, 
    completed: false
  },
  {
    task: "Read", 
    id: 6, 
    completed: false
  }];


class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todo: TodoListdata
    }
    // console.log(this.state); 
  }

toggleItem = id => {
  console.log(id)
  this.setState({
    todo: this.state.todo.map(item => {
      console.log("this is Item",item)
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        } 
      } else {
        return item; 
      }
    })
  });
}; 


  addToDo = taskName => {
    const newName = {
      task: taskName, 
      id: Date.now(), 
      completed: false
    }; 
    this.setState({
      todo: [ ...this.state.todo, newName ]
    })
  }

  clearRender = () => {
   this.setState({
    todo: this.state.todo.filter(item => item.completed === false)
   });
  }; 
  

  render() {
    console.log(this.state.todo)
    return (
      <div>
         {/* Title Section */}
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
  
      <section>
        {/* Calling page functionality */}
        <div>

        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} /> 
        <TodoForm addToDo={this.addToDo} clearRender={this.clearRender}  /> 

       </div>
       </section>
       

       
        
       </div> 
      
    );
  }
}

export default App;
