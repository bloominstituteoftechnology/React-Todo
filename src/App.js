import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./components/css/Todo.css"

const todos = [
  {
    task: 'Walk the Dog',
    id: 1,
    completed: false
  },
  {
    task: 'Feed the Dog',
    id: 2,
    completed: false
  },
  {
    task: 'WorkOut',
    id: 3,
    completed: false
  },
  {
    task: 'Get Groceries',
    id: 4,
    completed: false
  },
  {
    task: 'Get Gas',
    id: 5,
    completed: false
  },
  {
    task: 'Learn React',
    id: 6,
    completed: false
  }
];

class App extends React.Component {
           constructor(){
             super();
            
            
       this.state = {todos}



}
handleToggle = (itemId)=> {
  this.setState({
    todos: this.state.todos.map(item=>{
      if(item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      
      }else {
      return(item);
    }
    })
  });
}



handleItemAdd = (itemName) => {
  const todo = {
    task: itemName,
    id: Date.now(),
    completed: false
  };

  const newTodos = [...this.state.todos, todo];

  this.setState({
    todos: newTodos
  });
}

handleItemCompleted = () => {
  const newTodos = this.state.todos.filter(todo=>{
    return(!todo.completed);
  });
    
  this.setState({
    todos: newTodos,
  })
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  handleItemAdd ={this.handleItemAdd} handleItemToggle={this.handleToggle} handleItemCompleted={this.handleItemCompleted}/>
      <TodoList todos={this.state.todos} handleItemToggle={this.handleToggle} handleItemCompleted={this.handleItemCompleted} /> 
      </div>
    );
  }
}

export default App;
