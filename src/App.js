import React from 'react';
import TodoList from './views/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props){
    super(props);
    this.state = {
      title: 'Todo List: MVP ',
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }],
    }
  }

  addTodoTask = event => {

    console.log(event.target.value)
    this.setState({list: [{task: event.target.value}]})
  } 

  checkTodo = event => {
    console.log(event.target.checked)
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
         checked={this.checkTodo}
         addTask={this.addTodoTask} 
         data={this.state}/>
      </div>
    );
  }
}

export default App;

