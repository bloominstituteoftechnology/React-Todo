import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor(props){
   super(props)
   this.state.items =[];
 }
 
  onSubmit = (event) => {
    event.preventDefault();
    let newItem ={
      task: event.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      items: this.state.items.push(newItem)
    });
  }
 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList onSubmit={this.onSubmit} />
        <TodoForm items={this.state.items}/>
      </div>
    );
  }
}

export default App;
