import React from 'react';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoList from '../src/components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
import './components/TodoComponents/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: '',
      todolist: []
    };
  }

  inputHandler = (event) => {
    const {value} = event.target;
    console.log(value);
    this.setState({
      input: value,
    });
  };

  submit = (event, todoId) => {
    event.preventDefault();
    if(this.state.input){
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todolist: [...this.state.todolist, obj],
      input: ''
    })
   }
  };

  textStrike = (itemID) => {
    this.setState({
      todolist: this.state.todolist.map( item=>{
        if(item.id === itemID) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed,
          } 
        } else {
          return item;
        }
      })
    })
  }

  clear = (event) => {
    event.preventDefault();
    this.setState({
      todolist: this.state.todolist.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <TodoList todolist={this.state.todolist} textStrike={this.textStrike} />
        <TodoForm 
          input={this.state.input} 
          submit={this.submit} 
          inputHandler={this.inputHandler} 
          clear={this.clear}
        />
      </div>
    );
  }
}

 export default App;