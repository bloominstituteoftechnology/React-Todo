import React from 'react'
import Todo from './Todo'

const TodoList = (this.props.) => {

    return (
        <div className="ToDo-List">
            {props.TodoList.map((item) => (
                <Item
                key={item.id}
                item={item}
                completeItem={props.completeItem}
                />
             ))}
             <button className="clear-btn" onClick={props.clearCompleted}>
                ToDo Item Completed
             </button>
        </div>
    )
            };
            export default TodoList;









}

// const TodoList = (props) => {
//     const {item, completeItem, clearItem} = props

//     const clearCompleted = () => {
//         clearItem()
//     }

//     return (
//         <div>
//         {item.map((item, ind) => {
//            return <Todo list={item} key={ind} completeItem={completeItem}/>
//         })}
//         <button onClick={clearCompleted}>Clear Completed Items</button>
//         </div>
//     )
// }

// export default TodoList