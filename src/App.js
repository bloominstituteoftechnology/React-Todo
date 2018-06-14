import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: [],
      dataInput: ''
    }
  }

  toDoHandler = event => {
    console.log(event.target.value);
    this.setState({dataInput: event.target.value})
  }
 

  addTodo = () => {
    const data = {task: this.state.dataInput, id: Date.now(), completed: false};
    const todolist = this.state.todolist.slice();
    todolist.push(data);
    this.setState({todolist: todolist, dataInput: ''});
  }

  toggleFlag = () => {
    this.setState({completed: true});
    this.classList.add('completed');
  }

  render() {
    return (
      <div className='container'>
        <h2 className='title'>Todo List: MVP</h2>
       <TodoList todolist={this.state.todolist} toggleFlag={this.toggleFlag} dataInput={this.state.dataInput}/>
       <TodoForm toDoHandler={this.toDoHandler} addTodo={this.addTodo} dataInput={this.state.dataInput} />
       <Todo />
      </div>
    );
  }
}

export default App;


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // <TodoForm />
  //<TodoList itemslist={this.state.todolist.task} />
  /*var Button = React.createClass({
  getInitialState: function() {
    return {
      condition: false
    }
  },
  handleClick: function() {
    this.setState({
      condition: !this.state.condition
    });
  },*/