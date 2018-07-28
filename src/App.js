import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
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
  addTodos=event=>{
    if (this.state.newTask.length>=1) {
      event.preventDefault();
      const list=this.state.list.slice();
      list.push({'task': this.state.newTask, 'id':Date.now(),'completed':false});
      this.setState({newTask:'',list:list},localStorage.setItem('taskListItems',JSON.stringify(list)));
    }
  }
  updateTaskStatus=id=>{
      const list=this.state.list.slice();
      list.map((e)=>{if (e.id===id){return e.completed=!e.completed}});
      return this.setState({list:list},localStorage.setItem('taskListItems',JSON.stringify(list)));
    }
  removeCompleted=event=>{
    event.preventDefault();
    let list=this.state.list.slice();
    list=list.filter((e)=>e.completed===false);
    return this.setState({list:list},localStorage.setItem('taskListItems',JSON.stringify(list)));
  }
  concatenateTask=event=>{
    return this.setState({newTask: event.target.value});
  }
  render() {
    return (
      <div className='tasklist'>
        <h1>Task List</h1>
        <TodoForm
          newTask={this.state.newTask}
          newTaskChange={this.concatenateTask}
          addToDo={this.addTodos}
          clearCompletedToDos={this.removeCompleted}
        />
        <TodoList taskProp={this.state.list} updateTaskStatus={this.updateTaskStatus}/>
      </div>
    );
  }
}

export default App;
