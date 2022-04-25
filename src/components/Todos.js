import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import {createTodo, getTodos} from "../actions/todosActions";
import"../styles/Todos.css";
import { useNavigate, useParams } from 'react-router-dom';

const Todos = ({user_name, todos, getTodos, createTodo}) => {
    let {user_id} = useParams()

    const [ newTodo, setNewTodos ] = useState({
        todo_name : "",
        user_id : user_id
    })

    const navigate = useNavigate()

    

    useEffect(() => {
        getTodos(user_id)
    },[getTodos,user_id])

    const textBoxChanges = e => {
        e.persist();
        setNewTodos({
        ...newTodo,
        [e.target.name]: e.target.value,
        });
    };

  const formSubmit = (e) => {
      e.preventDefault();
      createTodo(newTodo)
      setNewTodos({...newTodo, todo_name: ""})
  }

    return (
        <div className='todos-outer-div'>
            <div className='logout-div'>
                <button
                    onClick={() => navigate("/")}>Back
                </button>
                <Logout /> 
            </div>
            <div className='main-todos-div'>
                <h2><b className='name'>{user_name}'s </b>2dos</h2>
                <form 
                    onSubmit={formSubmit} 
                    className="add-todo-form"
                    autoComplete='off'
                >
                    <input 
                        type='text'
                        name='todo_name'
                        id='todo_name'
                        value={newTodo.todo_name}
                        onChange={textBoxChanges}
                        placeholder='Add new list'
                    />
                    <button className='add-button'>Add</button>
                </form>
                <div className='todo-list'>
                    {todos.map(todo => (
                        <div 
                            className='todo' 
                            key={todo.todo_name}
                            onClick={() => navigate(`/users/${user_id}/todos/${todo.todo_id}`)}
                            >
                            <p>{todo.todo_name}</p>
                        </div>
                    ))}
                </div>                
            </div>

        </div>
    
    )
}

const mapStateToProps = state => {
    return {
        user_name: state.userReducer.user_name,
        // user_id: state.userReducer.user_id,
        todos: state.todosReducer.todos
    }
}

export default connect(mapStateToProps, {getTodos, createTodo})(Todos)