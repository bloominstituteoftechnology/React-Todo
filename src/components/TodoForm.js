import React from 'react';

class TodoForm extends React.Component {
    constructor(){
      super();
        this.state = {
            itemName: ''    //! <------ This is where the starting input will be blank ie..''
        }
    }
    //!This is to have an input in the box
        handleChanges = e => {
            this.setState({
                itemName: e.target.value
            })
        };

        handleSubmit = e => {
            e.preventDefault();
            this.props.addItem(this.state.itemName)
            this.setState({itemName: ''})
        }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChanges} value={this.state.itemName} type='text' name='item' placeholder='ToDo Form' />
            <button>Add Me!</button>
            </form>
        )
    }
}

export default TodoForm;