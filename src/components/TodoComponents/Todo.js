import React from 'react';
import './Todo.css';

/* I realize it was unnecessary to convert this into a class component but
it was a rabbit hole I went down early on ['-_-] */

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

export default Todo;