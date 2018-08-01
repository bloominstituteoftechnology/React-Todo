import React from 'react';
class TodoForm extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <input placeholder="...todo" onChange={this.handleInputChange} />
                </form>
                <div className="buttons">
                <button>Add Todo</button>
                <button>Clear Completed</button>
                </div>
            </div>
        )
    }
}

export default TodoForm;