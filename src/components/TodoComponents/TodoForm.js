import React from 'react'

class TodoForm extends React.Component {

//Var is input value
//Props value pass through construtor() & super() then set to input var
    constructor(props){
        super(props)
        this.state = {
            input:''
    
        };
    }
    handleChanges = e => {
     this.setState({[e.target.name]:e.target.value})
    };



    //addTask passing n props this.state.input as argument
    //To create new item in App's state
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({input: ''})
    }

    onClickClear = () => {
        this.props.removeCompleted(this.props.id)
        console.log(this.props)

    }
  

    render() {

        return(

            <div className='cta-wrap'>
            <div className='form-warp'>
    <form onSubmit={this.handleSubmit}>
        <input  
        type='text'
        name='input'
        id='new-task'
        placeholder='Enter Task'
        value={this.state.input}
        onChange={this.handleChanges}
        />
        <button type='submit'>Add Task</button>
        
    </form>

    </div>
    <button onClick={this.onClickClear}>Clear Task</button>
    </div>
        )
}
}

export default TodoForm