import React from 'react';
import './Todo.css';



class Todo extends React.Component { 
constructor(props) {
    super(props);
    this.state = {
                  done: false, 
                  self: this.props.item
                };
    this.toggleDone = this.toggleDone.bind(this);
}

toggleDone(){
    if(!this.state.done){
    this.setState({done: true});
    
    }
    else{
        this.setState({done: false});
    }
}

/* Parent callback
when the todo is clicked, it will run this props method.
The method will change the todos complete status in the parent state to true, 
which will change the classlist of the todo. 

outerToggle(todoState){
    let list = this.state.toDoList.splice();
    for (todo in list){
        if(todo.id === todoState.id){
            todo.complete = true;
        }
    }
    this.setState({toDoList: list});
dfd
}
} 

*/

    render(){
    return (
        
        <p className={
            `list-item ${this.props.completed ? 'done' : ''}` 
            } 
            onClick={this.props.onClick}
            data-id={this.props.id} 
        >
        
            {this.props.item.text}
        
        </p>
    )
}
}
/* 
clear(state){
    if()
}

onClick={this.props.onClick()}


< TodoForm clear={this.clear}
*/
export default Todo;