import React from 'react';

class Todo extends React.Component {
// const Todo = (props) => {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         itemText:'',
          
    //     }
    // }

render(){
    return(
        <div onClick={() => this.props.toggleItem(this.props.task.id)}
        
            className={
               this.props.task.completed ? "completed" : true
            }
            >
        
        <p>{this.props.task.task}</p>

        

        </div>
    )
}
}

export default Todo;