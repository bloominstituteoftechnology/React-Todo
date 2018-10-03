import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


let todoItem = [{task : '1st', id : Date.now(),  completed : false}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor(props){
   super(props);
   this.state ={  items : todoItem};
  
   this.addTodo = this.addTodo.bind(this);
  }
 
  addTodo(item) {
    
  // console.log(item);
    let newItem ={task: item, id: Date.now(), completed: false };
    this.setState({ items: this.state.items.push(newItem) });
     console.log(`addTodo ${this.state.items}`);
     console.log(this.state.items);
  }
 
  render() {
    console.log(`App render ${this.state.items}`);
    console.log(this.state.items);
    return (

      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList key={this.state.id}  items={this.state.items} />
        <TodoForm addTodo={this.addTodo}/> 
       

      </div>
    );
  }
}

export default App;
