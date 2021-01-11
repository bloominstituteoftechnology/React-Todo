import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state={
            inputValue:''
        }
    }

    handleChange= evt =>{
        this.setState({
            inputValue: evt.target.value
        })
    };

    handleSubmit = (evt) =>{
        evt.preventDefault();
        this.props.handleAddTodo(this.state.inputValue);
        this.setState({
            inputValue:''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} type='todo' name='todo' />
                <button>Add</button>
            </form>
        )
    }

}

export default TodoForm;