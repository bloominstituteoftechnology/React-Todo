import React from 'react' ;

// const myAlert = () => {alert('don\'t touch me!') };

const TodoForm = (props) => {
    return(
        <div>
            <form>
                <input 
                    value = {props.value}
                    onChange = {props.propChangeTodo}
                    type="text"
                    name="inputButton"  
                    placeholder="Enter New Task Here"
                />

                <button onClick={props.propAddTodoTask}>Add Task</button>

                <button onClick={props.propDeleteCompleted}>Delete Completed</button>

            </form>
        </div>        
    )
}
export default TodoForm ;