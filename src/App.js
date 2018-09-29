import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [{task:'', id:'',completed:false,important:false,}],
      task: '',
      // id: '',
      // completed: '',
    };
  }

  inputHandler = event => {
    const value = event.target.value;

    this.setState (
      {task:value}
    );
    }





  submitHandler = event => {
    event.preventDefault();

      const obj = {
        task: this.state.task,
        id: Date.now(),
        completed: false,
        important:false,
      }

      this.setState({
        todo: [...this.state.todo, obj],
        task: "",
      });
  }

  clearHandler = event => {
    event.preventDefault();

      this.setState({
        todo: [{task:'', id:'',completed:false,}],
        task: '',
      });
  }

  
  completedHandler = event => {
  
    const ID = parseInt(event.target.getAttribute('data-id'));
    const todos = this.state.todo.map( item => {
      if (ID ===item.id) {
        event.target.className='completed';
        return {...item, completed:!item.completed}
      }
      else {return item}
    })

    const filtered = this.state.todo.filter( item => ID !==item.id)
    setTimeout(()=>{this.setState ({
      todo: filtered,
    })},1000
    )
    this.setState ({
      todo: todos,
    })
  }

  importantHandler = event => {
  
    const ID = parseInt(event.target.getAttribute('data-id'));
    const todos = this.state.todo.map( item => {
      if (ID ===item.id) {
        event.target.className='important';
        return {...item, important:!item.important}
      }
      else {return item}
    })

    this.setState ({
      todo: todos,
    })
  }





  


  render() {
    console.log(this.state.todo)
    return (
      <div>
        <TodoForm value={this.state.task} inputHandler={this.inputHandler} submitHandler={this.submitHandler} />
        <TodoList list={this.state.todo} completedHandler={this.completedHandler} importantdHandler={this.importantdHandler} />

      </div>
    );
  }
  
}

export default App;
