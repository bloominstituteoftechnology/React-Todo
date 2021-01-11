import React from 'react';
class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: '',
        }
    }
    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.handleTodoAdd(this.state.inputValue);
        this.setState({
            inputValue: ''
        })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label> Add Todo
                <input 
                type='text'
                placeholder='Add Todo'
                onChange={this.onChange}
                name='todo'
                value={this.state.inputValue}

                />
                </label>
                <button>Add</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;