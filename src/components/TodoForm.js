import React from 'react';

 class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = { 
            item: ''
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
            });
        console.log(event.target.value);
    };

    submitItem = event => {
        event.preventDefault();
        event.target.reset();
        this.props.addItem(this.state.item);
        console.log('Item added');
    }


    render () {
        return (
            <form onSubmit={this.submitItem}>

            <input 
            type = 'text'
            value = {this.item}
            name = 'item'
            placeholder = 'To do ...'
            onChange = {this.handleChanges}
            />

           <br/>

            <button> Add </button>
            <button onClick={this.props.clearItems}> Clear </button>

            </form>
         
        )
    }
 }

 export default TodoForm;