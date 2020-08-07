import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './css/Todo.css';
import Todo from './components/Todo';

const tasks = [
  {
    item: 'Wake Up',
    id: 1,
    completed: false
  },
  {
    item: 'Kiss Nena',
    id: 2,
    completed: false
  },
  {
    item: 'Apply for that job',
    id: 3,
    completed: false
  },
  {
    item: 'Feed the dogs',
    id: 4,
    completed: false
  },
  {
    item: 'Cook dinner',
    id: 5,
    completed: false
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks // same as tasks: tasks
    };
  }

  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      //building a new state object each time
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  //class method to add a task item
  addItem = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }

  

  render() {
    localStorage.setItem ("item", "item");
    localStorage.getItem ("item", "");
    return (
     <>
     <div className="project">
        <h2 style={{marginTop: 0}}>Stephen Goodrick's To-Do List</h2>
        <div>
    <input type="text" className="input" placeholder="Search..." />
      </div>  
        <TodoForm addItem={this.addItem} />
      </div>
      <TodoList
        tasks={this.state.tasks}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
      />
      
    </>
    );
  }
}

export default App;
