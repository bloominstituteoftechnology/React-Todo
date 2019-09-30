import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { AST_False } from 'terser';

const taskData = [
  {
    task: 'Wash Dishes',
    id: 2542652,
    completed: true,
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: taskData,
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task=>{
        if (task.id === id){
          return{
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.setState.tasks.filter(task=> !task.completed)
    });
  };

  render() {
    return (
      <div>
        <div className='header'>
          <h2>Finish It</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList
          task={this.state.task}
          toggleTask={this.state.task}
        />
      </div>
    );
  }
}

export default App;
