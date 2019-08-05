import React from 'react';
import ReactDom from 'react-dom'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css'

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
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      data: data
    };
  }

  toggleItem = id => {
    console.log('id', id);

    this.setState({
    
      data: this.state.data.map(item =>{
        if (item.id === id) {
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
    console.log('setstate', this.state.data)
  }

  addTask = taskItem => {
    console.log('taskItem')
    const newTask = {
      task: taskItem,
      id: Date.now(), //it basically returns a long number that ~equates to the current time, rounded to the millisecond
      completed: false
    };
    this.setState({
      data:[...this.state.data, newTask]
    });
  };

  clearTask = () => {
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };


  render() {
    return (
      <>
      
      <TodoList data={this.state.data} toggleItem={this.toggleItem}  />
      <TodoForm addTask={this.addTask} clearTask={this.clearTask}/>
      </>
    );
  }
}

export default App;
