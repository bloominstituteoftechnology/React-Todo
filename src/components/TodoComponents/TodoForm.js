import react from "react";
import './Todo.css';
import './TodoForm';

const TodoForm = ({handleInputChange})=> {
    
    return (
        <form>
            <input placeholder= 'To Do Here ' type = 'text' onChange = { handleInputChange} />
            <button> Add To Do: </button>
            </form>
    )
}

export default TodoForm;