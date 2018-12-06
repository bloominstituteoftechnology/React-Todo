import React from 'react';

class TodoForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }
    changeHandeler = (event) => {
this.setState({inputText: event.target.value});
    }
submitHandler = (event) => {
event.preventDefault()
this.props.createTodo(this.state.inputText)
}
    render(){
        return (
        <form onSubmit={this.submitHandler}>
            <input
             type="text"
             value={this.state.inputText}
             onChange={this.changeHandeler}
            />
            <button type="submit">Add Todo</button>
            <button>Clear Todos</button>
        </form>
        );
    }
}

export default TodoForm;