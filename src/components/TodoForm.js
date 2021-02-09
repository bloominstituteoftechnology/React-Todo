import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.AddTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} type='text' name='todo' />
                <button type='submit'>Add To Do: </button>
            </form>
        )
    }
}

export default TodoForm