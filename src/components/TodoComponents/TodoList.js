// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


const todos = [
    {
        title: 'Eat Lunch',
        id: 123,
        purchased: false
    },
    {
        title: 'Eat post-lunch snacks',
        id: 124,
        purchased: true
    },
    {
        title: "Start thinking about what you'll eat for dinner",
        id: 125,
        purchased: false
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

    toggleItem = id => {
        this.setState({
            todoList: this.state.todoList.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        purchased: !item.purchased
                    }
                }
                return item; //what's going on with this line?
            })
        })
    }

    clearCompleted = event => {
        event.preventDefault();
        console.log(this.state.todoList)
        const clearedList = this.state.todoList.filter(todo=> todo.purchased === false)
        console.log(clearedList)

        this.setState({
            todoList: [...clearedList],
            title: ''
        })
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
            title: this.state.title,
            id: Date.now(),
            purchased: false
        }

        this.setState({
            todoList: [...this.state.todoList, newTodo],
            title: ''
        })
    }

    render() {
        return (
            <div class="form-body">
                {this.state.todoList.map((todo, index) => (
                    <Todo 
                    key={index} 
                    todoTitle={todo} 
                    toggleItem={this.toggleItem}
                    />  
                ))}
                <TodoForm 
                    title= {this.state.title}
                    handleChanges={this.handleChanges}
                    updateList={this.updateList}
                    clearCompleted={this.clearCompleted}
                />
            </div>
        )
    }
}

export default TodoList