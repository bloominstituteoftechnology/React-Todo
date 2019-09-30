import React from 'react';

class TodoForm extends React.Component { 
constructor(){
    super();
    this.state= {
        task:''
    };
}

handleChanges = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

submitTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.task)
}

render(){    
return(
        <form onSubmit={this.submitTask}>
            <input type='text'
             placeholder='add todo'
             name='task'
             value={this.task}
             onChange={this.handleChanges}
             />
        <button>add todo</button>
        <button>clear completed</button>
        </form>
    )
}
}
 export default TodoForm