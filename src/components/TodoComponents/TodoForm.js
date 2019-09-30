import React from 'react';

class TodoForm extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        const {onInputChange, onAddTodo} = this.props;
        return(
            <form>
                <input type='text' placeholder='...todo' onChange={onInputChange}/>
                <button onClick={onAddTodo}>Add Todo</button>
                <button onClick>Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm;