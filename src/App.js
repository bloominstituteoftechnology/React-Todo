import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor (){
    super ();
   
    this.state = {list: [
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
    ]};

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    console.log('state', this.state);
    const newList = this.state.list.push({task: todo, id: 12345, completed: false}); 
    this.setState({list: newList});
    console.log('state after', this.state);
  }

  render() {
    return (
      <div>
        <TodoList list={this.state.list}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
