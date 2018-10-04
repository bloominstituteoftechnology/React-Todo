import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);  

        this.completedItem = this.completedItem.bind(this);
    }

    completedItem(index){
        this.props.completedItem(index);
    }

    render() { 

        let items = this.props.items.map((item, index) => {
            return(
                <TodoListItem key={index} item={item} index={item.id} completedItem={this.completedItem}/>
            )
        })
        return ( 
            <ul>
                {items}
            </ul>

         );
    };

}
export default TodoList;