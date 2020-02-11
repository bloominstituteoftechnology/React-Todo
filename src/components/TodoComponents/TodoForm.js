import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
    }

    submitHander = e => {
        e.preventDefault();
        this.props.addNewTodo( this.state.newItem )
        this.setState({
            newItem: "",
        })
    }
    
    
    handleChange = e => {
        this.setState({
            newItem: e.target.value 
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitHander}>
                    <input
                        type="text"
                        name="item"
                        value={ this.state.newItem }
                        onChange={ this.handleChange }
                        required
                     />
                    <button>Add</button>

                </form>
            </div>
        )

    }
}

export default TodoForm;