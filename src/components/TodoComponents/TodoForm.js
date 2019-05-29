import React from 'react';

class TodoForm extends React.Component{
    state = {
        task: ''
    }
    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addTask = (e) => {
        this.setState({ task: ''})
        e.preventDefault()
        this.props.addTask(this.state.task)
    }
    render(){
        
        return(
            <form onSubmit={this.addTask}>
                <input onChange={this.handleChanges} type="text" name="task" placeholder="...todo"/>
                <button type='submit'>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;