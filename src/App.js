import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todolist: [
        {
          task: 'Organize Garage',
          id: 92518,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 92418,
          completed: false
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <TodoList />
        <todoForm />
        <Todo />
      </div>
    );
  }
}

export default App;
