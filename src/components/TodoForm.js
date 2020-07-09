import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            task : ''
        }
    }
submitItem = e => {
    e.preventDefault();
    this.setState({ task: '' });
    this.props.addItem(e, this.state.task)
}
handleChange = e => [
    this.setState({
        [e.target.name]: e.target.value
    })
]
    render(){
        return(
            <form onSubmit={this.submitItem}>
                <input
                type='text'
                value = {this.state.task}
                name='task'
                onChange={this.handleChange} />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;