import React from 'react';
const tasks = [
    {
        task: 'Get some sleep',
        id: Date.now(),
        completed: false
    },
    {
        task: 'Organize Garage',
        id: Date.now(),
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: Date.now(),
        completed: false
    },
    {
        task: 'Finish Project',
        id: Date.now(),
        completed: false
    }
]

class TodoList extends React.Component {


render () {
    return (
        <div className="list">
            {tasks.map(x => {
                return <div className='list-item' key={x.id}>{x.task}</div>
            })}
        </div>
    )
}
}

export default TodoList