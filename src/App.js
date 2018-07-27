import React from 'react';
import {ToDoInput, ToDoButton, ClearCompletedButton} from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    let savedTaskList=localStorage.getItem('taskListItems');
    savedTaskList?this.state={list:JSON.parse(savedTaskList),newTask:''}:this.state={list: [],newTask:''};
    }
  addTodos=()=>{
    if (this.state.newTask.length>=1){
      const list=this.state.list.slice(0);
      list.push({'task': this.state.newTask, 'id':Date.now(),'completed':false});
      this.setState({newTask:''});
      return this.updateState(list);
    } 
  }
  updateTaskStatus=event=>{
    if (event.target.id!==undefined) {
      const list=this.state.list.slice(0);
      for (let i=0,n=list.length; i<n; i++) {
        if (list[i]['id']==event.target.id){
          list[i]['completed']=!(list[i]['completed']);
          return this.updateState(list);
        }
      }
    }
  }
  removeCompleted=()=>{
    let list=this.state.list.slice(0);
    list=list.filter((e)=>e.completed===false);
    return this.updateState(list);
  }
  updateState=(list)=>{
    return this.setState({list:list},localStorage.setItem('taskListItems',JSON.stringify(list)));
  }
  concatenateTask=event=>{
    return this.setState({newTask: event.target.value});
  }
  triggerTodos=event=>{
    if (event.key === 'Enter') {
      return this.addTodos();
    }
  }
  render() {
    return (
      <div className='tasklist'>
        <h1>Task List</h1>
        <ToDoInput newTask={this.state.newTask} onChange={this.concatenateTask} onKeyPress={this.triggerTodos}/>
        <div className='button-container'>
        <ClearCompletedButton onClick={this.removeCompleted}/>
        <ToDoButton onClick={this.addTodos}/>
        </div>
        <TodoList taskProp={this.state.list} onClick={this.updateTaskStatus}/>
      </div>
    );
  }
}

export default App;
