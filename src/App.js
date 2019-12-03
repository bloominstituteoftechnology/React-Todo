import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
    todos : [
      {
        task: 'Learn React',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Walk Gus',
        id: 1528817084358,
        completed: false
      }
    ],
    todo: ''
  };
}
addTodo = e => {
  e.preventDefault();
  const newTodo = {task: this.state.todo, completed: false, id: Date.now()};
  this.setState({
    todos: [...this.state.todos, newTodo],
    todo:''
  });
};

changeTodo = e => this.setState({[e.target.name]: e.target.value})

toggleComplete = id =>{
  let todos = this.state.todos.slice();
  todos=todos.map(todo => {
    if (todo.id===id){
      todo.completed = !todo.completed;
      return todo;
    }else {
      return todo;
    }
  });
this.setState({todos});
}

clearCompleted = event =>{
  event.preventDefault();
  let todos =this.state.todos.filter(todo => !todo.completed);
  this.setState({todos})
};



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        todos={this.state.todos}
        handleToggleComplete={this.toggleComplete}
        />
  
        <TodoForm
        handleAddTodo={this.addTodo}
        handleTodoChange={this.changeTodo}
        handleClearTodos={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
