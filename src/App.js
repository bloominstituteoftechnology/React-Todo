import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      
      TodoArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        }
      ],
      inputText: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.HandleChanges = this.HandleChanges.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);

  }  

    toggleTodo(id) {
      const newList = this.state.TodoArray.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        }else {
          return todo;
        }
      })
      this.setState({
        TodoArray: newList
      })
       
      
    }

    clearTodos(I){
      I.preventDefault();
      const filtered = this.state.TodoArray.filter(todo => {
        return !todo.completed === true;
      })

      this.setState({TodoArray: filtered})
      
    }

    submitHandler(e) {
      e.preventDefault();
      const NewTask = {
        task: this.state.inputText,
        id: Date.now(),
        completed: false
      }
      
      this.setState({
        TodoArray: [...this.state.TodoArray, NewTask], 
      inputText: '' 
      })
    }

    HandleChanges(e) {this.setState({[e.target.name]: e.target.value})}
      
    

  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
      <h1 className="header">Todo List</h1>
       <TodoList todos={this.state.TodoArray} toggleTodo={this.toggleTodo}/>
       <TodoForm 
       handle={this.HandleChanges}
       submit={this.submitHandler}
       value={this.state.inputText}
       clearTodos={this.clearTodos}
       />
      </div> 
      
    );
  }
}

export default App;
