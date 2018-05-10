// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react'
import Todo from './Todo'


class TodoList extends Component{
    constructor(){
        super()
        this.state = {
            todos : [],
            newTodo : ''
        }
    }

    addItemTodo = (event) => {
      this.setState({ newTodo : event.target.value});
      console.log(this.state.newTodo)
    }

    updateTodos = (event) => {
        event.preventDefault();
        let updateTodos = [...this.state.todos];
        updateTodos.push(this.state.newTodo);
        this.setState({
            todos : updateTodos,
            newTodo : ""
        })

        console.log('UPDATE', this.state.todos)
    }
    render(){
        return(
        <div>
            <form  onSubmit = {this.updateTodos}>
                <input placeholder = "add todo" onChange = {this.addItemTodo}value = {this.state.newTodo} ></input>
            </form>
            {this.state.todos.map((todo, index) => {
                return <Todo todo = {todo} key = {index} />
            })}
        </div>
        )
    }
}

export default TodoList;