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

    removeTodo = (bubbles) => {
        console.log(this.state);
        console.log('bubbles', bubbles);
        let tempArr = this.state.todos;
        
        tempArr.splice(bubbles, 1)

        this.setState( {todos: tempArr} )
    }

    strikeout = (i) => {
        console.log(this.state);
        let tempArr = this.state.todos;
        
        tempArr[i].completed = !tempArr[i].completed

        this.setState( {todos: tempArr} )
    }

    handleTodoInput = (event) => {
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
        const tempArray = this.state.todos
        console.log("deleteTodo")
        tempArray.slice(this.state.index, 1)
        this.setState({
            todos: tempArray
        })
    }

    render(){        
        return(
            <div>
                {this.state.todos.map((todosItems, i) => <Todo 
                    key={i} 
                    index={i} 
                    todo={todosItems} 
                    toggle={this.toggleState} 
                    removeTodo={this.removeTodo} 
                    deleteTodo={this.deleteTodo}
                    strikeout={this.strikeout}
                />)}

                <form onSubmit={this.addTodo}>
                    <input type='text' 
                    onChange={this.handleTodoInput} 
                    placeholder='Tell me what you need to do' 
                    value={this.state.newTodo}/>
                </form>
            </div>
        )
    }
}

export default TodoList;