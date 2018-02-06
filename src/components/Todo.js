import React from 'react';

class Todo extends React.Component {
    constructor(item) {
    super();
        this.state = {
            item: item,
            completed: false,
        }
    }

    completeItem = () => {
        this.setState({newItem: '', completed: !this.state.completed});
        console.log('changed');
    }

    render() {
        const complete = this.state.completed ? '::COMPLETE' : ' ';
        return (
            <div>
                <h4>{this.props.item}{complete}</h4>
                <button className='completed-button' onClick={this.completeItem}>Completed</button>
            </div>
        );

    }
}

export default Todo;