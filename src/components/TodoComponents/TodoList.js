// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        if (this.props.todoItems === undefined && this.props.todoItems.length > 0) {
            return <div>The list is empty</div>
        }
        return (
            <div>
                <div>The To Do List ({this.props.todoItems.length} items)</div>
                {this.props.todoItems.map(e => (
                    <TodoItem 
                    key={e.id} TodoItem={e} 
                    completeItemById={this.props.completeItemById} />
                ))}
            </div >
        );
    }
}
export default TodoList;