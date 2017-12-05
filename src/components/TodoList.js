import  React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            toDos: [],
            newTodo: ''
        };
    }
    handleToDos = (event) => {
        this.setState( { newTodo: event.target.value } );
    };

    addToDos = (event) => {
        console.log(this.state.newTodo);
        event.preventDefault();
        const myTodoList = this.state.toDos;
        myTodoList.push(this.state.newTodo);
        this.setState({
            newTodo: '',
            toDos: myTodoList
        });    
    };

    removeTodo = (event) => {
        const myTodoList = this.state.toDos; // copy of the arr
        myTodoList.splice(event.target.id, 1);
        this.setState({toDos: myTodoList});
    }

    render() {
        return (
        <div>
            <div>
                {this.state.toDos.map( (item, i) => 
                    <div key={i}>
                        <Todo key={i} thing={item}/>
                        <button id={i} onClick={this.removeTodo}>Delete</button>
                    </div>
                )}
                
            </div>
            <form onSubmit={this.addToDos}>
                <input onChange={this.handleToDos} placeholder="Add new To Do!" value={this.state.newTodo} />
            </form>
        </div>
        
    );
    }
}

export default TodoList;



