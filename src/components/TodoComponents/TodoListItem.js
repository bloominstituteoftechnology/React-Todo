
import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    
    }
    render() { 
        console.log(this.props.item);
        return(
        <li> {this.props.item.task}</li>
        );
    }
}
 

export default TodoListItem;