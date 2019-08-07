import React from 'react';
import Todo from './Todo'

class todoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.list.map((item) =>
                    <Todo task={item.task} />
                )}
            </div>
        )
    }
}

export default todoList