import React from 'react';
import ToDoItem from './Todo';


class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed: false,
        }
    }
     onClick = (event) =>{
        event.preventDefault();
        this.setState({
            completed: !this.state.completed
        })
    };
    render(){
        return(
            <div style= {{width:'30%', height:'auto', border: 'solid'}}>
            <span>
            This is the Todo List Container
            </span>
            <hr/>
            {
                this.props.todoArray.map(todoElement =>{
                    return (

                        <div>
                            <ToDoItem key={todoElement.id} 
                            toDo={todoElement.toDo}
                            completed={this.state.completed}
                            onClick={this.onClick}
                            />
                        </div>
                    
                        
                    )
                })
            }
            </div>
        )
        
        
    }
}
export default TodoList