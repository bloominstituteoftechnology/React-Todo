import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todos: [
       {
         task: 'Organize Garage',
         id: 1528817077286,
         completed: false
       },
       {
         task: 'Bake Cookies',
         id: 1528817084358,
         completed: false
       }
     ],
     todo: {
            task: '',
            id: Date.now(),
            completed: false
            },
    }
  }

  todoHandler = event => {
    let newTodo = Object.assign({}, this.state.todo);
    newTodo.task = event.target.value;
    this.setState({todo: newTodo});
  }

  addTodo = () => {
    console.log('im getting here');
    const todos = this.state.todos.slice();
    todos.push(this.state.todo);
    this.setState({todos: todos});
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoProps={this.state.todos} />
        <TodoForm addTodoFunction={this.addTodo} todoSubmit={this.state.todo} todoHandler={this.todoHandler}/>
      </div>
    );
  }
}
export default App;
