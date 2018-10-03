import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.items);
        console.log(`TodoList ${this.props.items}`)
        let items = this.props.items.map((item,index) => {
            return(
                <TodoListItem key={index} item={item} index={index} />
            )
        });
        return(
            <ul>
                {items}
            </ul>
        );
    }
}

export default TodoList;