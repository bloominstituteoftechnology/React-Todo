import React from 'react';

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem:''
        };
    };

    handleChanges = event => {
        this.setState({
            newItem: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newItem: ''});
    };

    handleClear = event => {
        event.preventDefault();
        event.stopPropagation(); // needed?
        this.props.clearItems();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} value={this.state.newItem} />
                <button>Add</button>
                <button onClick={this.handleClear}>Clear</button>
            </form>
        )
    }
};