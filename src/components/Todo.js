import React from 'react'

const Todo = props => {
    const List = [props.updateTodoListArray];
    List.forEach(listItem => <div>{listItem}</div>)

}
export default Todo.
