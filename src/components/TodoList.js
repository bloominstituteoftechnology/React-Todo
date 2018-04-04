import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodoItem: "",
            todos: [""]
        };
    }

    handleAddTodo = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmitTodo = () => {
        const { todos } = this.state;
        todos.push(this.state.newTodoItem);
        this.setState({ todos, newTodoItem: "" });
    };

    render() {
        return (
            <div>
                <Todo {...this.state} />
                <input
                    type="text"
                    name="newTodoItem"
                    value={this.state.newTodoItem}
                    placeholder="New To Do Item"
                    onChange={this.handleAddTodo}
                />
                <button onClick={this.handleSubmitTodo}>Add To Do</button>
            </div>
        ); 
    }
}

export default TodoList;

// SOLUTION
// import React, { Component } from 'react';
// import Todo from './Todo';

// class TodoList extends Component {
//     constructor() {
//         super();

//         this.state = {
//             todos: [],
//             newTodo: ''
//         };
//     }

//     addTodo = (e) => {
//         e.preventDefault();
//         const updatedTodos = this.state.todos;
//         updatedTodos.push(this.state.newTodo);
//         this.setState({
//             todos: updatedTodos,
//             newTodo: ''
//         });
//     };

//     handleNewTodoInput = (e) => {
//         this.setState({ newTodo: e.target.value });
//     };

//     render() {
//         return (
//             <div>
//                 {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
//                 <form onSubmit={this.addTodo}>
//                     <input type="text" onChange={this.handleNewTodoInput} placeholder="Add a new todo" value={this.state.newTodo} />
//                 </form>
//             </div>
//         );
//     }
// }

// export default TodoList;