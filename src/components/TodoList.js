import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component{
    render(){
        console.log(this.props.toggleItem)
        return(
            <div>
                {
                    this.props.todoList.map(item => 
                        <Todo
                            item = {item}
                            key = {item.id}
                            toggleItem = {this.props.toggleItem}
                        />)
                }
            </div>
        )
    }
}

export default TodoList;