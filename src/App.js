import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

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
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
    })
  })
}


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
  
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
         {/* Title Section */}
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
  
      <section>
        {/* Form and button section */}

        <div> 
        <button type="submit"> Submit </button>
        <button> Clear </button>
        </div> 
       </section>
       {/* Content seciton */}
       <div>
            <TodoForm addToDo={this.state.addToDo}   /> 
             <TodoList todoItem={this.state.todo} ToggleItem={this.ToggleItem} /> 
       </div>
       </div> 
      
    );
  }
}

export default App;
