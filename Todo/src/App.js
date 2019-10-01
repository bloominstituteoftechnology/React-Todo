import React from 'react';
import {ToDoData} from './components/TodoComponents/TodoData';
import {TodoList} from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ToDoData
    }
    this.deleteTasks = this.deleteTasks.bind(this);
  }
    toggleItem = id => {
      console.log(id);
      this.setState({
        todo: this.state.todo.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
            else {
              return item;
            }
        })
      });
  };

  addItem = taskName => {
    const newItem = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearTasks = () => {
    this.setState({
      todo: this.state.todo.filter(item => {return !item.completed})
    });
  };



  deleteTasks = (index) => {
    const tasks = this.state.todo
    tasks.splice(index, 1);
    this.setState({ tasks })
    
  }

   
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList todo ={this.state.todo}
        toggleItem={this.toggleItem}
        deleteTasks={this.deleteTasks}
        />
        <button className="clear-btn" onClick={this.clearTasks}>
                    Clear Completed
                </button>
                
        </div>
      </div>
    );
  }

} //close class function

export default App;
