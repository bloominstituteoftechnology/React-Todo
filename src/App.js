import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos:
      [
        {
          task: 'Implement Displaying',
          id: 15566521651,
          completed: false,
        },
        {
          task: 'Implement Adding New',
          id: 156165198,
          completed: false,
        },
        {
          task: 'Implement Implement Flipping False',
          id: 651581981,
          completed: false,
        },
        {
          task: 'Implement Styling',
          id: 351965109,
          completed: false,
        },

      ],
    };
  }

  render() {
    return (
      <div className="app-container">
        <TodoList list={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
