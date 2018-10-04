import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.items);
        console.log(`TodoList ${this.props.items}`)
        let items = this.props.items;
        items.map((item,index) => {
            return(
                <Todo key={index} item={item} index={index} />
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