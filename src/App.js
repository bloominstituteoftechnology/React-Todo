import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: [],
      inputText: '',
      id:null,
      completed: false
    };
  }

  add = event => {
    event.preventDefault();
    if(this.state.inputText){
      this.setState({
        list: [...this.state.list, {todo: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ''
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputText : event.target.value,
    });
  };

  completed = id => {
    let tasks = this.state.list.slice()
    tasks = tasks.map(task => {
      if(id === task.id){
        task.completed = !task.completed;
        return task
      }else{
        return task
      }
    })
    console.log(tasks)
    this.setState({
      tasks
    })
  };

  clear = event => {
    event.preventDefault();
    console.log(this.state.completed)
    if(!this.state.completed){
      let newTodo = this.state.list.filter( props => {
        return props.completed !== true
      })
      this.setState({
        list: newTodo
      })
    }
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.list)
    return (
      <div class="todo-container">
        <TodoList todo={this.state.list} todoCompleted={this.completed}/>
        <TodoForm inputText={this.state.inputText} add={this.add} clear={this.clear} handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
