import React, { Component} from 'react';

class DeleteButton extends Component {
    constructor() {
        super();
        this.state = {
            completed: false
        };
    }

    handleCompleted = () => {
        this.props.action(this.props.index);
    }

    render() {
        console.log(this.props.selected);
        return (
            <div onClick={this.handleCompleted}>x</div>
        );
    }
}


export default DeleteButton;