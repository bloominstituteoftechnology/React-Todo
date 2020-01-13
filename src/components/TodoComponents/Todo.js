import React from 'react';

class TodoItem extends React.Component {
    constructor () {
        super();
        this.state = {

        }
    }
    completeItem = () => {
        this.props.completeItemById(this.props.TodoItem.id);
    }
    render() {
        return <div className={this.props.TodoItem.isCompleted?'complete':'incomplete'} onClick={this.completeItem}>{this.props.TodoItem.description}</div>
    }
}
export default TodoItem;