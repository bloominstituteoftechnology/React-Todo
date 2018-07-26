import React from 'react';
import {ToDoInput, ToDoButton, ClearCompletedButton} from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const Todos=[];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      list: Todos
    }
  }
  updateTodos=()=>{
    const list=this.state.list;
    list.push({
      'task': document.querySelector('.input-field').value,
      'id':Date.now(),
      'completed':false
    });
    this.setState({list:list});
    document.querySelector('.input-field').value='';
  }
  render() {
    return (
      <div>
        <div onKeyPress={ (e) => {if (e.key === 'Enter') {this.updateTodos()}}}><ToDoInput/></div>
        <ClearCompletedButton />
        <div onClick={this.updateTodos}><ToDoButton /></div>
        <TodoList taskProp={this.state.list} />
      </div>
    );
  }
  
}

export default App;
