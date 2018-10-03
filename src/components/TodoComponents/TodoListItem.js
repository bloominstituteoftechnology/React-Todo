
import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.completedItem = this.completedItem.bind(this);
    }

    completedItem(event){
        event.preventDefault();
        this.props.completedItem(this.props.index);
    }


    render() { 
        let nameClass = this.props.item.completed? "completed" : "incompleted";
        console.log(this.props.item);
        return(
            <li className={nameClass} onClick={this.completedItem}> 
                {this.props.item.task}
                
            </li>
        );
    }
}
 

export default TodoListItem;