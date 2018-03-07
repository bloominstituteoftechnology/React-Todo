import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state={
            todos: [],
            newTodo: '',
            index: null
        };
        // this.handleTodoInput = this.handleTodoInput.bind(this);
        // this.addTodo = this.addTodo.bind(this);
        // this.toggleState = this.toggleState.bind(this);

    } 

    getIndex = (bubbles) => {
        console.log('bubbles', bubbles);
        let tempArr = this.state.todos;
        
        tempArr.splice(bubbles, 1)

        this.setState( {todos: tempArr} )
    }


    handleTodoInput = (event) => {
        this.setState({newTodo: event.target.value})
    } 
    addTodo = (event) => {
        event.preventDefault();
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

    // toggleState = () => {
    //     // console.log(this);
    //     console.log('index', this.state);
    //     // const tempArray = this.state.todos;
    //     // tempArray[this.state.index].completed = !tempArray[this.state.index].completed
    //     // console.log('should be true first time', this.completed);
    //     // console.log(this.state.todos)
    //     // // const tempStatus = this.state.todos[this.state.index].completed
    //     // this.setState ({
    //     //     todos: tempArray
    //     // })
        
    //   }
    
    render(){
        return(
            <div>
                {this.state.todos.map((todosItems, i) => <Todo key={i} index={i} todo={todosItems} toggle={this.toggleState} getIndex={this.getIndex} deleteTodo={this.deleteTodo}/>)}
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