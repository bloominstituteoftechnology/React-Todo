import React from "react";
import ReactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './main.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
      input: ""
    };
  }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // handleChange() {
    //   this.setState(inputText=event.target.value);
    // }
    // let handleInput = event => {
    //   console.log(event)
    //   this.setState({
    //     inputText: event.target.value
    //   });
  handleChange = event => {
   this.setState({
     input: event.target.value
   });
 };

 handleClick = event => {
   console.log(event.target.innerText)
   const newTodos = this.state.todos.slice(0)
   for (let i in newTodos) {
     if ( newTodos[i]['task'] == event.target.innerText ) {
       newTodos[i]['completed'] = !newTodos[i]['completed']


     }
       this.setState({todos: newTodos})
   };
   event.target.classList.add('completed')
 }

   addTodo = event => {
     event.preventDefault()
     this.setState({
       todos: [... this.state.todos,  {task:this.state.input, id:Date.now(), completed:false}],
       input: ""
     });
   }

   removeCompleted = event => {
     event.preventDefault()
     let new_list = this.state.todos.filter(todo => todo.completed == false)
     console.log('hola adri:', event.target);
     console.log(this.state.todos.filter(todo => todo.completed == false).classList);
     this.setState({
       todos: new_list
     })
   }





  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todos} handleClick={this.handleClick} />
        <TodoForm handleChange={this.handleChange}
                  inputText={this.state.input}
                  addTodo={this.addTodo}
                  removeTodo={this.removeCompleted}
         />

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App
