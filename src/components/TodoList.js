// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import { Button} from 'reactstrap';
import "./Todo.css";
class TodoList extends React.Component{
    constructor(){
        super();  
    }

render(){
    return(
        <div>
            {this.props.todos.map((item)=>{
                return(
                    <Todo key={item.id} todos={item}
                    toggleCompleted={this.props.toggleCompleted}/>
                )
            })}
            
            <Button onClick={this.props.clearCompleted}>Clear Completed</Button>
        </div>
    )
}
}


export default TodoList;
