import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task: ''
        }

    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            task: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name='todo'
                    value= {this.state.task}
                    onChange={this.handleChanges}
                    >
                        
                    </input>
                    <button type='submit'>Add</button>
                    <button onClick={this.props.clearCompleted} type='button' >Clear</button>
                </form>

            </div>
        )
    }
}
 
export default TodoForm