import React from 'react';
import todolist from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      Todo:todolist,
      Todos:''
    }
    console.log(props);
  }
  handleUpdateStateEnter = event => {
    const value = event.target.value
    const Todolist = this.state.Todo.slice();
    Todolist.push({
        id:Todolist.length,
        task:value,
        completed:false
      })
    this.setState( () => {
     return {
        Todos:value
      }
    })
    if(event.keyCode === 13){
      this.setState(() => {
        return{
          Todo:Todolist,
        }
      })
      event.preventDefault();
      event.target.value = "";
    }
    
    
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      {this.state.Todo.map( list => <TodoList list={list} />)}
      <TodoForm func={this.handleUpdateStateEnter}/>
      </div>
    );
  }

}

export default App;
