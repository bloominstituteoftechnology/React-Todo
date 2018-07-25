import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
const Todos=[{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      list: Todos
    }
  }
  render() {
    return (
      <div>
        <ToDoForm />
        {this.state.list.map(task => <TodoList taskProp={task} key={Date.now()}/>)}
      </div>
    );
  }
}

export default App;
