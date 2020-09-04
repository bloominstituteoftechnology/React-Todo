import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import "./Todo.css"

const taskList =[
  {
    name:"Organize Garage",
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name:"Bake Cookies",
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  //constructor
  constructor(){
    super();
    this.state={
      taskList: taskList
    };
  }

  toggleTask = (taskId) =>{
    this.setState({
      taskList:this.state.taskList.map((task) =>{
        if(task.id === taskId){
          return{
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      taskList: this.state.taskList.filter((task) =>{
        return !task.completed
      })
    })
  }

  addTask = (taskName) =>{
    console.log("bk: app.js: App: addTask: taskName: ",taskName);
    this.setState({
      taskList:[
        ...this.state.taskList,
        { id: Date.now(), name : taskName, completed:false}
      ]
    })
  }

  render() {
    return (
      <div className ="TodoApp">
      <div className="header">
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTask={this.addTask} />
      </div>
      <TodoList
        taskList={this.state.taskList}
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
