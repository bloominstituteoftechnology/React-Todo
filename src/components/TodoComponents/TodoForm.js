import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
        }
    }
    changeHandler = event => {
       this.setState({inputText: event.target.value});
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.createTodo(this.state.inputText);
        this.setState({ inputText: ''});
    }

    clearHandler = () => {
        this.props.removeCompleted();
    }
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input 
                type="text"
                id="todo-input"
                onChange={this.changeHandler}
                placeholder="Add an item"
                value={this.state.inputText}
            />
                <button type="submit">Add To Do</button>
                <button onClick={this.clearHandler}>Clear</button>
            </form>
        )
    }

}

export default TodoForm;