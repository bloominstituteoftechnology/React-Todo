import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoData: [
        {
          task: 'sdf',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'dsfs',
          id: 1528817084358,
          completed: false
        }
      ],
    }
  }
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
