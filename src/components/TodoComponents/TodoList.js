import React from 'react';
import Todo from './Todo'

function TodoList(props) {
  return (
    <div>
      {props.todoDataList.map((todo, index) => {
        return <Todo todo={todo} key ={index} changeCompletion={props.changeCompletion}/>
      })}
    </div>
  )
}

export default TodoList;