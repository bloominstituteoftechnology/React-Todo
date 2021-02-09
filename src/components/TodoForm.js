import React from 'react'


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            inputValue: ''
        }
    }
    handleChange= e => {
        this.setState({
            inputValue:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.inputValue);
        this.setState({
            inputValue:''
        })
    }

    render(){
        // console.log(this.state)
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} type='text' name='todo' />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm