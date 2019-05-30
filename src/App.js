import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const things = 
[
    {
    task: 'Get Up ON TIME!!',
    id: 14,
    completed: false   
    },
    {
    task: 'Like For Real This Time (Get Up)',
    id: 15,
    completed: false
    },
    {
    task: 'Brush your teeth',
    id: 16,
    completed: false
    },
    {
    task: 'Start Doing Parkour',
    id:340940,
    completed: false
    }
];

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      things
    };
  }

  addTodo = todo => {
    let newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    const sorted = [...this.state.things, newTodo].sort(function(a, b) {
      let taskA = a.task.toUpperCase();
      let taskB = b.task.toUpperCase();

      return taskA > taskB ? 1 : -1;
    });
    this.setState({ things: sorted });
  };

  toggleTodo = id => {
    let things = this.state.things.slice();
    things = things.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({things});
  };

  clearComplete = id => {
    const filtered = this.state.things.filter(todo => {
      return todo.completed === false;
    });
    this.setState({things: filtered});
  };

  render() {

    if(this.state.things.length < 1) {
      return (
        <div className='App'>
          <div className='header'>
            <h1>What You Need To Do?!</h1>
            <TodoForm addTodo={this.addTodo} />
          </div>
          <h2>Damn! You still aren't done?!</h2>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="header">
          <h1>What You Need To Do?</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
          things={this.state.things}
          toggleTodo={this.toggleTodo}
        />
        <div>
          <button onClick={this.clearComplete} className='clear-btn'>
            Done With That
          </button>
        </div>
      </div>
    );
}
  

export default App;
