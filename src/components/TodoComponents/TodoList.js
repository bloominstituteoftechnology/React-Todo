//   _____     ____          _     _     _     
//  |_   _|__ |  _ \  ___   | |   (_)___| |_ _ 
//    | |/ _ \| | | |/ _ \  | |   | / __| __(_)
//    | | (_) | |_| | (_) | | |___| \__ \ |_ _ 
//    |_|\___/|____/ \___/  |_____|_|___/\__(_)
                                            

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="list">
            <div className="h1"><h1>To Do:</h1></div>
            {props.todoArray.map(x => <Todo completedToggle={props.completedToggle} task={x.task} key={x.id} id={x.id} pointer={props.pointer} completed={x.completed}/>)}
        </div>
    );
}

export default TodoList;