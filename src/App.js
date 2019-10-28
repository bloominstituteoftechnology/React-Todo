import React from 'react';
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
    })
  }

  render() {
    console.log('rendering....');
    return (
      <div>
        <h2>To Do App</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}


export default App;
