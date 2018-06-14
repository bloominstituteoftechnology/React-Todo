import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todos: [
      //  {
      //    task: 'Organize Garage',
      //    id: 1528817077286,
      //    completed: false
      //  },
      //  {
      //    task: 'Bake Cookies',
      //    id: 1528817084358,
      //    completed: false
      //  }
     ],
     todo: {
            task: '',
            id: 0,
            completed: false
            },

      blanktodo: {
          task: '',
          id: 0,
          completed: false
      }      
    }
  }

  todoHandler = event => {
    let newTodo = Object.assign({}, this.state.todo);
    newTodo.task = event.target.value;
    newTodo.id = Date.now();
    this.setState({todo: newTodo});
  }

  addTodo = () => {
    let todos = this.state.todos.slice();
    todos.push(this.state.todo);
    this.setState({todos: todos});
    this.setState({todo: this.state.blanktodo});
  }

  completeTodo = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      else{
        return item;
      }
    });

    this.setState({ todos: todos});
  }

  clearCompleted = () => {
    let todos = this.state.todos.slice();
    todos = todos.filter(item => {
      return item.completed === false;
    });

    this.setState({ todos: todos});
  }

  render() {
    return (
      <div>
        <h2>Let's Get Some Stuff Done</h2>
        <TodoList todoProps={this.state.todos} todoComplete={this.completeTodo}/>
        <TodoForm addTodoFunction={this.addTodo} todoSubmit={this.state.todo} todoHandler={this.todoHandler} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}
export default App;
