import React from 'react';
import './TodoStyle.css';



class Todo extends React.Component{

    render() {
        
         const itemClicked = () => {
             let className = this.props.completed ? "todo-item completed" : "todo-item";
             this.props.toggle(this.props.id)

         }
        return (
            <div>{this.props.todos.map( item => {
                return (
                    < ul onClick = {this.itemClicked}  key = {item.id} id = {item.id}  task = {item.task} >
                        < li onClick = {this.props.toggleCompletedFlag}> {item.task} </li>
                    </ul>
                        )
            })} 
            </div>
        )
    }
}
export default Todo;