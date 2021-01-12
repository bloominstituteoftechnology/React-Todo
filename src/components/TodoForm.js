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

    handleClear = (evt) =>{
        evt.preventDefault();
        this.props.handleClearCompleted();
    }

    render(){
        return(
            <form>
                <input 
                value={this.state.inputValue} 
                onChange={this.handleChange} 
                type='todo' 
                name='todo'
                placeholder='...todo'
                 />
                <button onClick={this.handleSubmit} >Add Todo</button>
                <button className='clear-btn' onClick={this.handleClear} >Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm;