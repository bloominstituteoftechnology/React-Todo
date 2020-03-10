import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)

    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.props.addTodo}>
                    <input
                    type='text'
                    name='todo'
                    value={this.props.todos.name}
                    onChange={this.handleChanges}
                    >
                        
                    </input>

                </form>

            </div>
        )
    }
}
 
export default TodoForm