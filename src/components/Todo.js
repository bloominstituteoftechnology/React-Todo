import React from 'react';

class Todo extends React.Component {
        state = {
            item: this.props.item,
            completed: false,
        }

    completeItem = () => {
        this.setState({newItem: '', completed: !this.state.completed});
        console.log('changed');
    }

    render() {
        const complete = this.state.completed ? '::COMPLETE' : ' ';
        const buttonName = this.state.completed ? 'Uncomplete' : 'Completed'
        return (
            <div className='todo-item-container'>
                <div className='todo-item'>
                    <div className='todo-entry'>{this.state.item}{complete}</div>
                    <button className='buttons' onClick={this.completeItem}>{buttonName}</button>
                </div>
                <div className='break'></div>
            </div>
        );

    }
}

export default Todo;