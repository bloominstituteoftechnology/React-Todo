import React from 'react';
import TodoList from './components/TodoList'
import "./components/Todo.css"
const taskList = [
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList:taskList
    }
  }
  handleToggle = (todoId) =>{
     this.setState({
       ...this.state,
       taskList: this.state.taskList.map(todo=>{
         console.log(todo.completed)
       if(todoId === todo.id){ 
         return({
           ...todo,
           completed:!todo.completed
         })
       }else{
         return(todo)
        }
     })
     
     })
  }
  handleClear = task =>{

    this.setState({
      taskList: this.state.taskList.filter(i=>(!i.completed))
    })
  }
  handleAdd= task =>{
    this.setState({
      taskList:[...this.state.taskList, {
        task:task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleClear={this.handleClear} handleAdd={this.handleAdd} handleToggle={this.handleToggle} taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
