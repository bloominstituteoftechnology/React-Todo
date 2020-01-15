import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            todo : ""
        }
    }

    setList(event){
        event.preventDefault();
        this.setState({todo: ''})
        this.props.addTodo(this.state.todo);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    id="ListName"
                    value={this.state.todo}
                    onChange={e => this.setState({todo: e.target.value})}
                />
                <input 
                type="submit"
                value="Submit"
                onClick={e => this.setList(e)} />
                <button onClick={e => this.props.clearCompleted(e)}>Clear Completed</button>   
            </form>
        );
    }
}

export default TodoForm;