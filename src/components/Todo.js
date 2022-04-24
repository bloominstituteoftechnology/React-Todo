import React, { useEffect, useState } from 'react'
import '../styles/Todo.css';
import {connect} from "react-redux";
import {getTasks, createTask, toggleTask, deleteTasks} from "../actions/tasksActions";
import { deleteTodo } from '../actions/todosActions';
import { useNavigate, useParams } from 'react-router-dom';
import Logout from './Logout';

function Todo ({user_name, todos, tasks, getTasks, createTask, toggleTask, deleteTasks, deleteTodo}) {

    const navigate = useNavigate()

    const {todo_id} = useParams()

    const [task, setTask] = useState({
        task_description : "",
        todo_id : todo_id
    })

    const currentTodo = todos.find((todo) => todo.todo_id === Number(todo_id))

    const textBoxChanges = e => {
        e.persist();
        setTask({
          ...task,
          [e.target.name]: e.target.value,
        });
      };

    useEffect(() => {
        getTasks(todo_id)
    },[getTasks,todo_id])

    const formSubmit = e => {
        e.preventDefault();
        createTask(task);
        setTask({...task, task_description: ""})
    }

    const [deleteButton, setDeleteButton] = useState(false);

    const firstDelete = () => {
        deleteTodo(todo_id)
        navigate("/user/todos")
    }

        return (
            <div>
                <div className='logout-div'>
                    <button
                        onClick={() => navigate("/user/todos")}>Back</button>
                    <Logout />
                </div>
                <div className='todo-main-div'>
                    <h2>{currentTodo.todo_name}</h2>
                    <form 
                        onSubmit={formSubmit}
                        className="add-todo-form"
                    >
                        <input 
                            type='text'
                            name="task_description"
                            id='task_description'
                            placeholder='Add a task'
                            value={task.task_description}
                            onChange={textBoxChanges}
                        />
                        <button className='add-button'>Add</button>
                    </form>
                    <div>
                        {tasks.map(task => (
                            <div 
                                onClick={() => toggleTask(task.task_id, tasks)}
                                className={`task${task.completed? ' completed' : '' }`}
                                key={task.task_id}>
                                <h3>{task.task_description}</h3>
                            </div>
                        ))}  
                    </div>
                    <div className='delete-buttons-div'>
                        <button 
                            onClick={() => deleteTasks(tasks)}
                            className="clear"
                        >
                            Clear completed
                        </button>
                        <button 
                            onClick={() => setDeleteButton(true)}
                            className="delete-button">
                            Delete List
                        </button>
                    </div>
                    {deleteButton ? (
                        <div className='delete-warning'>
                            <h2>U SHRRR?</h2>
                            <button onClick={() => firstDelete()}>YUP</button>
                        </div>
                    ) : null}                    
                </div>

            </div>
        )
}

const mapStateToProps = state => {
    return {
        tasks : state.tasksReducer.tasks,
        todos : state.todosReducer.todos,
        user_name : state.userReducer.user_name
    }
}
export default connect(mapStateToProps, { getTasks, createTask, toggleTask, deleteTasks, deleteTodo })(Todo)

