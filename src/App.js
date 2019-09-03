import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'

const todoData =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
  super();
  this.state= {
  todos: todoData,
};

  }
  filterCompleted = ()=> {
    this.setState({
      todos : this.state.todos.filter(todo => {
        return !todo.completed;
      
      })
    });
  }
  toggleCompleted = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
      if (id  ===todo.id){
        return {...todo, completed: !todo.completed};
     } else {
       return todo;
     }
    })
    });
  }
addTodo = task => {
  this.setState({
todos:[...this.state.todos, {
  task: task,
  id: Date.now(),
  completed:false
  
}]

  })
}
  render() {
    console.log (this.state);
    return (
      <div>
        <TodoForm addTodo={this.addTodo} filterTodos={this.filterCompleted}/>
        <h2>Welcome to your Todo App!</h2>
        
        <TodoList todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
