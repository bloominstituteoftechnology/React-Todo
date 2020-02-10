import React from 'react'

class TodoForm extends React.Component {

//Var is input value
//Props value pass through construtor() & super() then set to input var
    constructor(props){
        super(props)
        this.state = {
            input:''
    
        };
    }
    handleChanges = e => {
        this.setState({[e.target.name]:e.target.value})
    };

    //addTask passing n props this.state.input as argument
    //To create new item in App's state
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({input: ''})
    }

    render() {

        return(
    <form onSubmit={this.handleSubmit}>
        <input 
        type='text'
        name='input'
        id='new-task'
        value={this.state.input}
        onChange={this.handleChanges}
        />
        <button type='submit'>Add Task</button>
    </form>

        )
}
}

export default TodoForm