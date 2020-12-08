import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super();

    }

    

    render() {

        return (

            <form onSubmit = {this.submit}>
                <input 
                    type='text' 
                    name='item' 
                    id='item' 
                    value={this.state.text} onChange={this.input}
                     />
                <input 
                    type='submit' 
                    value='Add Item' 
                    onClick={this.submit}
                     />
                    <input 
                        type='button' 
                        value='Clear Completed' 
                        onClick={this.props.clearCompleted}
                         />
            </form>
        )

    }

}

export default TodoForm