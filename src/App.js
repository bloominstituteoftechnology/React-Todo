import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

function StorageObject( task, id, completed )
{
  this.task = task;
  this.id = id;
  this.completed = false;
}
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state
  constructor()
  {
    super();
    this.state = 
    {

    };
  }
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
