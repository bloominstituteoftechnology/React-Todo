import React from "react";
import ReactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import SearchForm from './components/SearchComponents/SearchForm'

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
      todoText: "",
      searchText: "",
    };
  }

  handleChange = event => {
    console.log(event.target.name)
   this.setState({
     [event.target.name]: event.target.value
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
       todos: [...this.state.todos, {task:this.state.todoText, id:Date.now(), completed:false}],
       todoText: ""
     });
   }

   removeCompleted = event => {
     event.preventDefault()
     let new_list = this.state.todos.filter(todo => todo.completed == false)
     this.setState({
       todos: new_list
     })
   }

   handleSearch = event => {
     event.preventDefault()
     let search_result = Array.from(document.querySelectorAll('.todo'))
     let search_filtered = search_result.filter(
       item =>
       item.innerText.toLowerCase().includes(this.state.searchText.toLowerCase()))
     console.log(search_result);
     for (let i=0; i<search_result.length; i++){
       search_result[i].classList.add('filtered');
     }
     for (let i=0; i<search_filtered.length; i++){
       search_filtered[i].classList.remove('filtered');
     }
   }


   handleClear = event => {
     event.preventDefault()
     let search_result = Array.from(document.querySelectorAll('.todo'))
     for (let i=0; i<search_result.length; i++){
       search_result[i].classList.remove('filtered');
     }
   }





  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todos} handleClick={this.handleClick} />
        <TodoForm handleChange={this.handleChange}
                  inputText={this.state.todoText}
                  addTodo={this.addTodo}
                  removeTodo={this.removeCompleted}
         />
         <SearchForm
           handleChange={this.handleChange}
           inputSearch={this.state.searchText}
           search={this.handleSearch}
           clear={this.handleClear}
         />

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App
