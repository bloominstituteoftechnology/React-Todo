import React from 'react'

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state={
        textInput:""
        }
    }
handleChanges = e =>{
    this.setState({
        textInput:e.target.value
    })
}
handleSubmit= e =>{
    e.preventDefault()
    this.props.handleAdd(this.state.textInput)
    this.setState({
        textInput:""
    })
}
    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.textInput} onChange={this.handleChanges} type='text' name="task" placeholder=" Add task"/>
                <button>Add</button>
            </form>
            <button onClick={this.props.handleClear}>Clear Task Done</button>
        </div>
    )
}}

export default TodoForm