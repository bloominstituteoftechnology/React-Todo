import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


const todos = [
  {
    task: 'Walk the Dog',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Feed the Dog',
    id: Date.now(),
    completed: false
  },
  {
    task: 'WorkOut',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Get Groceries',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Get Gas',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Learn React',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
           constructor(){
             super();
            
            
       this.state = {todos:todos}



}
handleItemToggle = (itemId)=> {
  this.setState({
    todos: this.state.todos.map(item=>{
      if(item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return(item);
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
        <TodoForm  handleItemAdd ={this.handleItemAdd}/>
         <TodoList todos={this.state.todos} handleItemCompleted={this.handleItemCompleted} /> 
      </div>
    );
  }
}

export default App;
