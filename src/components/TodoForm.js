import React from 'react';

class TodoForm extends React.Component {



   render() {

    return(
        <form>
            <div>
            <input onSubmit={this.props.handleSubmit}
            type="text"
            name="itemText"
            value={this.props.itemText}
            onChange={this.props.handleChanges}
            />

            <div className="forButtons">
            <button onClick={this.props.handleSubmit}>Add Task</button>
         
            </div>
            </div>
        <div className="forButtons">
            <button onClick={this.props.handleComplete}>Clear Completed</button>
            </div>
    
        </form>
    )
   }
        
        
    }



export default TodoForm