import React from 'react';
import './Todo.css';

const TodoList = props => {
    let lists = props.toDoList;
    let search = props.searchBar.trim().toLowerCase();

    if (search.length > 0) {
        lists = lists.filter(function(user) {
          return user.task.toLowerCase().match(search);
        });
    }

    return (
        <div>
            {lists.map(list => {
                if (list.task === '') {
                    return;
                }
                return <div className='todo-list'
                    style={list.completed ? { textDecoration: 'line-through' } : undefined}
                    onClick={() => props.toggleCompleted(list.id)}
                    key={Math.random()}>
                    {list.task}
                </div>;
            })}
        </div>
    );
};


export default TodoList;