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
    event.target.reset()
    
}

render(){    
return(
       <> <form onSubmit={this.submitTask}>
            <input type='text'
             value={this.task}
             name='task'
             onChange={this.handleChanges}
             />
        <button>add todo</button>
        </form>
</>
    )
}
}
 export default TodoForm