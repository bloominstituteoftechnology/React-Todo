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
  e.prevent.default();
  const newTodo = {task: this.state.todo, completed: false, id: Date.now()};
  this.setState({
    todos: [...this.state.todos, newTodo],
    todo:''
  });
};

changeTodo = e => this.setState({[e.target.name]: e.target.value})


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        todos={this.state.todos}/>
  
        <TodoForm
        handleAddTodo={this.addTodo}
        handleTodoChange={this.changeTodo}
        />
      </div>
    );
  }
}

export default App;
