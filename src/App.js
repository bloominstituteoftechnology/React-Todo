import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Do Laundry',
    id: 1528817084350,
    completed: false
  },

  {
    task: 'Make Dinner',
    id: 1528817084351,
    completed: false
  },

  {
    task: 'Walk Dog',
    id: 1528817083458,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (){
    super(); 
    this.state = {
      list: data
    };
  }
 
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  toggleTask = id =>{
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === id) {
          return {
            ...task, 
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }

 deleteTask = event => {
   event.preventDefault();
   this.setState({
     list: this.state.list.filter(task => {
       return !task.completed
     })
   
   });
 };

  render() {
    return (
      <div>
        <h2>To Do App</h2>
        <TodoForm removeTask={this.removeTask} addTask={this.addTask} />
        <TodoList toggleTask={this.toggleTask} list={this.state.list} deleteTask={this.deleteTask} />
      </div>
    );
  }
}


export default App;
