import React from 'react';
import todolist from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      Todo:todolist,
    }
  }
  handleUpdateStateEnter = event => {
    const Todolist = this.state.Todo.slice();
    Todolist.push({ task:event.target.value,id:Todolist.length,completed: false})
    if(event.keyCode === 13){
     this.setState({Todo:Todolist})
     event.preventDefault();
    } else {
      return null
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
