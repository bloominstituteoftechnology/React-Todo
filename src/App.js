import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          task: '',
          id: 0,
          completed: false
        }
      ]

    }
  }
 
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
