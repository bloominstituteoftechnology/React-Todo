import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'


/* Build instructions 
<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />.
*/




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      taskText: ''
    }
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList tasks={this.state.tasks}/>
        <ToDoForm taskText={this.state.taskText}/>
      </div>
    );
  }
}

export default App;
