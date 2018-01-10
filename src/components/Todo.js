import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            finished: false,
            delete: false
        }
    }
    
    handleClick = () => {
        this.setState({
        finished: !this.state.finished
        });
    }
    
    handleRemove = (event) => {
        event.preventDefault();
        this.setState({
            delete: !this.state.delete
        })
    }
    
    render() {
        return (
            <form className={this.state.delete === true ? "itemRemove" : "item"} >
                <label className={this.state.finished === true ? "listItem" : "listItem-none"} onClick={this.handleClick}>
                    {this.props.item}
                </label>
                <button onClick={this.handleRemove} className="itemRemove-button">Remove</button>
            </form>
        );
    }

}

export default Todo;