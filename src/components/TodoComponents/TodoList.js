import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.tasks.map(eachOneInMap => (
                <Todo key={eachOneInMap.task} 
                todoOnProp={eachOneInMap}
                changeFinished={props.changeFinished}
                />

            ))}
        </div>
    );
};



export default TodoList;