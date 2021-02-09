import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodoName: '',
        }
    }

    handleChange = (evt) => {
        this.setState({
            newTodoName: evt.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.newTodoName);
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input 
                type='text'
                name='task'
                value={this.state.newTodoName}
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;