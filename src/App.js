import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[
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
      newTodo: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.newTodo, completed: false, id: Date.now()}
      ],
      newTodo: ""
    });
  }

  todoComplete = (id) => {
    this.setState({
      todos: [...this.state.todos].map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
          return todo;
        }else{
          return todo;
        }
      })
    });
  }

  clearCompletedTodo = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos].filter(todo => {
        return !todo.completed;
      })
    });
  }

  render() {
    return (
      <div>
        <TodoForm
          addTodo={this.addTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          clearCompletedTodo={this.clearCompletedTodo}
        />
        <TodoList
          todos={this.state.todos}
          todoComplete={this.todoComplete}
        />

      </div>
    );
  }
}

export default App;
