import React from 'react';
 
import Todo from './Todo';
import TodoForm from './TodoForm';
 
class TodoList extends React.Component {
 
    //Component state with default values
    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                value: "todo 1",
                isDone: false
            },
            {
                id: 2,
                value: "todo 2",
                isDone: true
            },
            {
                id: 3,
                value: "todo 3",
                isDone: false
            }
        ]
    }
 
    //Local helper method to get date
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }
 
    //method called from Todo component
    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }
 
    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
    }
 
    //method called from AddTodo component
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({ addTodoValue: "", todos })
        } else {
            console.log("Please Add Todo Text");
        }
    }
 
    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <TodoForm fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
 
export default TodoList;