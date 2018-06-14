import React from 'react' ;

const myAlert = () => {alert('don\'t touch me!') };

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
                <input type="text" placeholder="fuck"/>



                <button onClick={props.propAddTodoTask} value="fml">Add Task</button>



                <button onClick={myAlert}>Delete Completed</button>
            </form>
        </div>
        
    )
}

export default TodoForm ;