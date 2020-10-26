import React from 'react';



class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    //Update keystrokes
    handleChanges = (e) =>{
        this.setState({
            input: e.target.value
        })
    };

    //Submit form
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges}
                    type='text'
                    name='item'
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;