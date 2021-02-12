import React from 'react';
import './Todo.css';
// import components
import Todo from './Todo';




const TodoList = props => {

  return (
    <div className="todo-list">



      {/* {!props.isSearch && props.todos.map(todo => {
          // console.log("TODOLIST TODO: ", todo);
        return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
        })} */}



      {props.filteredTodos.filter(todo => todo.name.includes(props.searchTerm))
        .map(filter => <Todo toggleCompleted={props.toggleCompleted} key={filter.id} todo={filter} />)
      }


          {/* // console.log("TODOLIST TODO: ", todo); */}
          




        {/* {props.todos.map(todo => {
          // console.log("TODOLIST TODO: ", todo);
        return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
        })} */}

      


        {/* {
          if(this.props.searchTerm){
             {props.filteredTodos.map(todo => {
              // console.log("TODOLIST TODO: ", todo);
            return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
            })}
          } else {
            {props.todos.map(todo => {
              // console.log("TODOLIST TODO: ", todo);
            return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
            })}
          }
        } */}

        {/* {
          props.todos.map(todo => {
            if (todo.name.includes(props.todoSearch)) {
              return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
            }
          })

        } */}


    </div>
  );
};

export default TodoList;