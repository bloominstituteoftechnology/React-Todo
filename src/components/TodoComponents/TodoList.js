// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const todos = [
    {
        title: 'Eat Lunch',
    },
    {
        title: 'Eat post-lunch snacks',
    },
    {
        title: "Start thinking about what you'll eat for dinner"
    },
] 

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todoList: todos,
            title: '',
        }
    }

    handleChanges = event => {
        console.log(event.target)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateList = event => {
        event.preventDefault();
        const newTodo = {
            title: this.state.title
        }

        this.setState({
            todoList: [...this.state.todoList, newTodo]
        })
    }

    render() {
        return (
            <div>
                {this.state.todoList.map((todo, index) => (
                    <Todo key={index} todoTitle={todo} />
                ))}
                <TodoForm 
                    title= {this.state.title}
                    handleChanges={this.handleChanges}
                    updateList={this.updateList}
                />
            </div>
        )
    }
}

export default TodoList