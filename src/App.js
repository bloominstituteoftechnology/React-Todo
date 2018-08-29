import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();//let's us access lifestyle methods (hooks)
  this.state = {
    todos: [
      {
      task: "Organize JS Notes",
        id: 1,
        completed:false
      },
      {
     task: "Make Energy Bar",
      id: 2,
      completed: false
    },
    {
      task: "Do Shopping",
      id: 3,
      completed: false,
    },
    {
    task: "Feed the Cat",
    id: 4,
    completed: false,
    }

    ],
    todo:""
  };
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList handleToggleComplete={this.toggleTodoComplete}
      todos={this.state.todos} />
      <TodoForm
      value={this.state.todo}
      handleTodoChange={this.changeTodo}
      handleAddTodo={this.addTodo}
      handleClearTodos={this.clearCompletedTodos}
      />


        
      </div>
    );
  }
}

export default App;
