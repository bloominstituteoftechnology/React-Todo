import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import styled from 'styled-components'

const StyledApp = styled.div`
    margin: 0 auto;
    width: 50vw;
    height: 90vh;
    padding: 50px;
    box-shadow: 0 5px 10px 0 #757575, 0 4px 5px 0 #a8a8a8;
    background-color: #251635;
`

const toggleTask = (id, tasks, setTasks) => {
    setTasks(
        tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            } else return task
        })
    )
}

const handleInput = (event, setTaskInput) => {
    const inputValue = event.target.value
    setTaskInput(inputValue)
}

const clearCompleted = (event, tasks, setTasks) => {
    event.preventDefault()
    setTasks(tasks.filter(task => task.completed === false))
}

const addTask = (event, tasks, setTasks, setTaskInput) => {
    event.preventDefault()
    const inputValue = event.target[0].value
    if (inputValue !== '') {
        setTasks([
            ...tasks,
            { task: inputValue, id: Date.now(), completed: false }
        ])
        setTaskInput('')
    }
}

const App = () => {
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState([])

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasksList'))
        if (storedTasks) setTasks(storedTasks)
    }, [])

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(tasks))
    })

    return (
        <StyledApp>
            <TodoList
                tasks={tasks}
                toggleTask={toggleTask}
                setTasks={setTasks}
            />
            <TodoForm
                addTask={addTask}
                inputText={taskInput}
                handleInput={handleInput}
                clearCompleted={clearCompleted}
                setTasks={setTasks}
                tasks={tasks}
                taskInput={taskInput}
                setTaskInput={setTaskInput}
            />
        </StyledApp>
    )
}

export default App
