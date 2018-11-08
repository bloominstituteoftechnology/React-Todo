import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
//data
const TodoData = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
    todos: TodoData,
    inputText: '' 


  }
}

 handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
 }

 addTodo = e =>{
   e.preventDefault();
   
  this.setState({
    todos: [
      ...this.state.todos, 
      { task: this.state.inputText,
        completed: false
      }
    ],
    inputText: ''
   });
 }
  render() {
    return (
      <div className='app'>
        <TodoList todos= {this.state.todos} />
        <TodoForm
                addTodo={this.addTodo}
                inputText={this.state.inputText}
                handleChange={this.handleChange}
            />
      </div>
    );
  }
}

export default App;
