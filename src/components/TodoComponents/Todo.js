import React from 'react';



class Todo extends React.Component { 
constructor(props) {
    super(props);
    this.state = {done: false};
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
            `list-item 
            ${this.state.done ? 
            'done' : ''}`
        }>
        
            {this.props.item}
        
        </p>
    )
}
}

export default Todo;