import React from "react";
import ReactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


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
   console.log('step 1');
   const newTodos = this.state.todos.slice(0)
   console.log('step 2');
   for (let i in newTodos) {
     this.state.todos[i]['task'] == event.target.innerText ?
      newTodos[i]['completed'] = !newTodos[i]['completed']:
       console.log('isnt working');
       console.log('value now:', this.state.todos[i]['completed'] );
   };
 }

   addTodo = event => {
     event.preventDefault()
     this.setState({
       todos: [... this.state.todos, {task:this.state.input, id:Date.now(), completed:false}],
       input: ""
     });
   }

   removeTodo = event => {
     event.preventDefault()
     // const new_list = this.state.todos.filter(todo => todo.completed == false)
     // console.log(new_list)
     this.setState({
       todos: this.state.todos.filter(todo => todo.completed == false)
     })
   }





  render() {
    return (
      <div className="App">
        <TodoList todoList={this.state.todos} handleClick={this.handleClick} />
        <TodoForm handleChange={this.handleChange}
                  inputText={this.state.input}
                  addTodo={this.addTodo}
                  removeTodo={this.removeTodo}
         />

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App
