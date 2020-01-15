import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks =[
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


class App extends Component {
  state = {
    toDoList: tasks,
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //state changes below:


  addNewTask = newTaskName => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {
          task: newTaskName,
          id: Date.now(),
          completed: false,
          
        },
      ],
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    };
    this.setState(newState);
  };

  clearPurchased = () => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.filter(item => {
        return !item.completed;
        //^^=== if (item.purchased === false) return true
      }),
    };
    this.setState(newState);
  };



  render() {
    return (
      <div>
        <h1>Errand Tracker</h1>
        <TodoList errands={this.state.toDoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm addNewTask={this.addNewTask} clearPurchased={this.clearPurchased}/>
      </div>
    );
  }
}

export default App;
