import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state= {
            todoText: ''
        }
    }
    handeChanges = e => {
        this.setState({
            todoText: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="item"
                    value={this.state.todoText}
                    onChange={this.handeChanges}
                />
                {/* <label htmlFor="title">Search</label>
                <input 
                type="text" 
                name="title" 
                onChange={this.handleChanges}
                value={this.props.search}
                /> */}
                <button>Add Todo</button>
            </form>
        );
    }
}
export default TodoForm