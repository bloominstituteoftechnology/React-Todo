import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
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
      tasks: [
        {
        task: 'sample name',
        id: 2342342342,
        completed: false
        },
        {
          task: 'sample name',
          id: 2342342342,
          completed: false
          }
      ],
      taskText: ''
    }
  }

  // addTodo = event => {
  //   // prevent the default action of a button
  //   event.preventDefault();
  //   console.log(event.taget)
  // }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm taskText={this.state.taskText} addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
