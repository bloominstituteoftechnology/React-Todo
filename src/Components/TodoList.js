import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state={
            todos: [],
            newTodo: '',
        };
        
    } 

    removeTodo = (...remove) => {
        let Arr = this.state.todos;
        
        Arr.splice(remove, 1)

        this.setState( {todos: Arr} )
    }

    lineThrough = (i) => {
        let Arr = this.state.todos;
        
        Arr[i].completed = !Arr[i].completed

        this.setState( {todos: Arr} )
    }

    TodoInput = (event) => {
        this.setState({newTodo: event.target.value})
    } 

    addTodo = (event) => {
        event.preventDefault();
        if (this.state.newTodo === '') return;
        const todoList = this.state.todos;
        const newItem = {
            text: this.state.newTodo,
            completed: false,
        }
    
        this.setState({
            todos: [ ...todoList, newItem ],
            newTodo: ''
        })
    }

    deleteTodo = () => {
        const Array = this.state.todos
        Array.slice(this.state.index, 1)
        this.setState({
            todos: Array
        })
    }

    render(){        
        return(
            <div>
                {this.state.todos.map((todosItems, i) => <Todo 
                    key={i} 
                    index={i} 
                    todo={todosItems} 
                    toggle={this.toggle} 
                    removeTodo={this.removeTodo} 
                    deleteTodo={this.deleteTodo}
                    lineThrough={this.lineThrough}
                />)}

                <form onSubmit={this.addTodo}>
                    <input type='text' 
                    onChange={this.TodoInput} 
                    placeholder='Tell me what you need to do' 
                    value={this.state.newTodo}/>
                </form>
            </div>
        )
    }
}

export default TodoList;