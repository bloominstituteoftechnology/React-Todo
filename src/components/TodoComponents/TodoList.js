// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

/*
    <TodoList /> receives your Todos array and iterates over 
    the list generating a new <Todo /> for each element in the array.
*/

// import App from '../../App';
import Todo from '../TodoComponents/Todo'

const TodoList = props => {
    return (
        <div>
            {props.todoProps.map(todo => <Todo task = {todo.task} />)}
        </div>
    )
}

export default TodoList;


