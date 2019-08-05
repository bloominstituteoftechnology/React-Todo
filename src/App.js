import React from 'react';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : [
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
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Just Another Todo App!</h2>
        <TodoList list={this.state.todo}/>
      </div>
    );
  }
}

export default App;
