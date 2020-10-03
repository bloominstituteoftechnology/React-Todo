import React from 'react';

class TodoForm extends React.Component {
constructor(){
    super();
    this.state={task:''}
}
// const [task,setTask]=useState('');

handleChange=((e)=>{
     this.setState({task:e.target.value})
 })

handleSubmit=((e)=>{
     e.preventDefault();
    this.props.addTask(this.state.task);
     this.setState({task:''});

 });

render(){
        // console.log(this.state.task)
    return(
        <form onSubmit={this.handleSubmit}>
            <input 
                type='text' 
                placeholder='task' 
                name='newTask'
                onChange={this.handleChange} 
                value={this.state.task}
            />
            <button >Add Todo</button>
            <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
    )}
}

export default TodoForm;