import React, {useState} from 'react'

const TodoForm = (props) => {
    const [taskForm, setTaskForm] = useState({
        task: ''
    })

    const onChange = (e) => {
        setTaskForm({
            ...taskForm,
            task: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleAdd(taskForm.task)
        setTaskForm({
            task: ''
        })
    }

    const onClear = () => {
        props.clear()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Task:
                    <input 
                    value={taskForm.task}
                    placeholder='Enter a task here'
                    onChange={onChange}
                    />
                </label>
                <button>Add Task</button>
            </form>
            <button onClick={onClear}>Clear Completed</button>
        </div>
    )
}

export default TodoForm
