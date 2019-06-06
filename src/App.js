import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state={
    tasks: [
    {
      task: 'Change Laundry',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Walk the Dogs',
      id: 1528817084358,
      completed: false
    }
  ],

  term: "",

  };
  
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({term:e.target.value});
  };

  addTask = (e) => {
      e.preventDefault();
      const newTask =  {
        task: this.state.term,
        id: Date.now(),
        completed: false
      }

      this.setState({tasks:[...this.state.tasks, newTask]})
  };

  onToggle = (id) => {
    this.setState((prevState)=> {
     return {
       tasks: prevState.tasks.map(
         (task)=>{
           if(task.id === id){
             return {
               ...task,completed:!task.completed
             }
           }else {
             return task;
           }
         }
       )
     }
    })
     }

     deleteTask = (e) => {
        e.preventDefault();
        this.setState({ 
            tasks: this.state.tasks.filter(
            (task) => {
            return !task.completed;
            }
            )
        })
     }
  
  render() {
    return (
      <div>
        < TodoList tasks = {this.state.tasks} onToggle = {this.onToggle} deleteTask = {this.deleteTask}/>
        < TodoForm term = {this.state.term} changeHandler = {this.changeHandler} addTask = {this.addTask} />
      </div>
    );
  }
}

export default App;
