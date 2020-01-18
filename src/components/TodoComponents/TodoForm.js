import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        }
    };
        handleChanges = e => {
            this.setState({ ...this.state, newItem: e.target.value });
        }
        handleSubmit= e => {
            e.preventDefault();
            this.props.addNewItem(this.state.newItem);
        };
    render() {
        console.log('render form');
        return (
            <form className= 'form-styled' onSubmit={this.handleSubmit}>
                <input 
                    onChange= {this.handleChanges}
                    value= {this.state.newItem}
                    type='text'
                    name='item'
                />                    
                <button>Add</button>  
            </form>
        )
        
    }

}
export default TodoForm;