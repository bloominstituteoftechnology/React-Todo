import React, {useState} from 'react';

function TodoForm(props) {
    const [todo, setTodo] = useState('');
    function onSubmit(event) {
        event.preventDefault();
        props.addTodo(todo);
        document.getElementsByName('todoform')[0].reset();
    }
    function onChange(event) {
        setTodo(event.target.value);
    }
    return (<form name="todoform" onSubmit={onSubmit}>
        <input placeholder='Todo Item' onChange={onChange}/>
        <button type="button" value="Submit">Submit</button>
    </form>)
}

export default TodoForm;