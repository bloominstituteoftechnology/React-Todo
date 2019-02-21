import React from 'react';
import Todos from './components/TodoComponents/Todos';
import TodoForm from './components/TodoComponents/TodoForm';
// import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'Organize Garage',
      completed: false
      },

      {
        id: 2,
        title: 'Bake Cookies',
        completed: false
        },

        {
          id: 3,
          title: 'Take out the trash',
          completed: false
      }
    ]
  }

  // Toggle complete
   markComplete = (id) => {
    this.setState ({todos: this.state.todos.map(todo => { 
    if(todo.id === id) {
      todo.completed = !todo.completed 
    }
    return todo;
    }) });
  }
  
  
  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Todo List: MVP</h2>
        <TodoForm/>
        <Todos todos = {this.state.todos} markComplete = 
        {this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
