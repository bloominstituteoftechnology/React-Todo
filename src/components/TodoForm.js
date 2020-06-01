import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            input:''
        };
    }
    onChange = e => {
        this.setState({ input: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({
            input:''
        })
    }
    

    render(){
    return(
        <div>
            <form onSubmit={this.onSubmit}>
                <input
                type='text'
                name='todo'
                value={this.state.input} 
                onChange={this.onChange}
                />
                <button>Add Todo</button>
                <button onClick={''}>Clear Completed</button>
            </form>
        </div>
    )
}
}
export default TodoForm;