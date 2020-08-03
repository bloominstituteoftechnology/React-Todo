import React from 'react';

class TodoForm extends React.Component {



   render() {

    return(
        <form>
            <input onSubmit={this.props.handleSubmit}
            type="text"
            name="itemText"
            value={this.props.itemText}
            onChange={this.props.handleChanges}
            />

            <button onClick={this.props.handleSubmit}>Add Task</button>
            <button onClick={this.props.handleComplete}>Clear Completed</button>

        </form>
    )
   }
        
        
    }



export default TodoForm