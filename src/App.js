import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
    todos:[ { task: 'Organize Garage', id: 1528817077286, completed: false},
          { task: 'Bake Cookies', id: 1528817084358, completed: false},
          ],
            item: ""
        }
  } //Constructor 

   changeToDoHandler= event => {
     console.log (event.target.value);
     this.setState({task: event.target.value});
   };

  addItem= () => {
    const todos = this.state.todos.slice();
    todos.push({task:this.state.item, id:Date.now(), completed:false});
    this.setState({todos,todo:""});
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todos={this.addItem} /> 
        <TodoList items={this.state.todos} />
      </div>
    );
  }
} //App 

export default App;
