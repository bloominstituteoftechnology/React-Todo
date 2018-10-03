import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div>
            {props.listContent.map((listItem) => {
                return (
                    <Todo
                        listItem={listItem}
                        onClick={props.toggleCompleted}
                        key={listItem.id}
                    />
                )
            })}
            <TodoForm
                listContent={props.listContent}
                newListItem={props.newListItem}
                changeHandler={props.changeHandler}
                addNewListItem={props.addNewListItem}
            />
        </div>
    );
}

export default TodoList;