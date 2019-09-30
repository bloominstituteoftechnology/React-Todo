import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasksData = [
  {
    task: 'Wash all the walls.',
    id: 2542652,
    completed: true,
  },
  {
    task: 'Shave the cat.',
    id: 2542653,
    completed: false,
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: tasksData,
    };
  }

  toggleTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(item=>{
        if (item.id === id){
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskTitle => {
    const newTask = {
      task: taskTitle,
      id: Date.now(),
      completed: false,
    };
      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item=> !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Finish It: </h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
