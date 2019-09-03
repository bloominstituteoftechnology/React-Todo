import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { Container, Header, Divider, Segment } from 'semantic-ui-react';

import "semantic-ui-css/semantic.min.css";
import "./components/TodoComponents/Todo.scss"
//base class
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  //set up state in out constructor method
  

const todos = [
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
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }

  addTodo = (todoText) => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      todos: []
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item)=>!item.completed)
    })
    // console.log(this.state.todos);
  }

  toggleDone = (id) => {
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if (todo.id === id){
          return {
          ...todo,
          completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    return (
      <Container>
        <Header as="h2">Todo:</Header>
        <TodoForm addTodo={this.addTodo} clearAll={this.clearAll} clearCompleted={this.clearCompleted}/>
        <Divider horizontal />
        <TodoList todos={this.state.todos} toggleDone={this.toggleDone}/>
      </Container>
    );
  }
}

export default App;