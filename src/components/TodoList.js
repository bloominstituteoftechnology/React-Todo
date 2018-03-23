import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        }
       
    };

 addTask = (event) => {
        event.preventDefault();
        const newItems = this.state.todos;
        newItems.push(this.state.newTodo);
        this.setState({
            todos: newItems,
            newTodo: '' 
        });
    }

handleTaskInput = (event) => {
    this.setState({ 
        newTodo: event.target.value
    });
};

    render() {
        return (
            <div className='TodoList' >
                <h2>TodoList</h2>
                {this.state.todos.map((value, i) => <Todo key={i} value={value} />
                )}

                <form onSubmit={this.addTask}>
                    <input type='text'
                    onChange={this.handleTaskInput}
                    placeholder="Add new task"
                    value={this.state.newTodo}/>
                </form>
            </div>
        );
    }
}

export default TodoList;