import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
//data
const TodoData = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

let nextId = 2;

const getNewId = () => {
  nextId += 1;
  return nextId;
};

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
        completed: false,
        id: getNewId()
      }
    ],
    inputText: ''
   });
 }

  markComplete = id =>
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          return{
            ...todo,
            completed: todo.completed === false ? true : false
          };
        }
        else{
            return todo;
        }
      })   
    });

  clearComplete = ev =>{
    ev.preventDefault();
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.completed === true
      )
    });
  };
  render() {
    return (
      <div className='app'>
        <TodoList 
          todos= {this.state.todos}
          markComplete={this.markComplete}
        />
        <TodoForm
          clearComplete={this.clearComplete}
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
         />
      </div>
    );
  }
}

export default App;
