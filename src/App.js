import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
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
      newTodo: '',
    };
  }


  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {task: this.state.newTodo,
        id: Date.now(),
        completed: false}
      ],
      newTodo: ''
    })
  }

  changeCompletedHandler = id => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id !== id) {
          return todo
        } else {
          return {
            ...todo,
            completed: todo.completed === 'false'
? 'true' : 'false'          }
        }
      })
    })
  }

  changeHandler = event => {
    this.setState({newTodo: event.target.value})
  }

  render() {
    return (
    <div className="container">
        <h1>Todo List:</h1>
        <TodoList 
          todos={this.state.todos} 
          changeCompletedHandler={this.changeCompletedHandler}
        />
        <TodoForm 
          changeHandler={this.changeHandler} 
          addNewTodo={this.addNewTodo} 
          newTodo={this.state.newTodo} 
          todos={this.state.todos} 
        />
      </div>
    );
  }
}

export default App;
