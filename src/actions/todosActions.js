import axios from "axios"

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const CREATE_TODO_START = "CREATE_TODO_START";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAILURE = "CREATE_TODO_FAILURE";

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getTodos = (user_id) => dispatch => {
    dispatch({type: FETCH_TODOS_START});
    axios.get(`https://toodueapp.herokuapp.com/api/todos/${user_id}`, {headers})
        .then(res => {
            dispatch({type: FETCH_TODOS_SUCCESS, payload: res.data})
        }
        ).catch(err => {
            dispatch({type:FETCH_TODOS_FAILURE})
        })
}

export const createTodo = (todo) => dispatch => {
    dispatch({type: CREATE_TODO_START});
    console.log(todo)
    axios.post("https://toodueapp.herokuapp.com/api/todos", todo)
        .then(res => {
            console.log(res)
            dispatch({type: CREATE_TODO_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type:CREATE_TODO_FAILURE})
        })
}

export const deleteTodo = (todo_id) => dispatch => {
    dispatch({type: DELETE_TODO_START});
    axios.delete(`https://toodueapp.herokuapp.com/api/todos/${todo_id}`)
        .then(res => {
            dispatch({type: DELETE_TODO_SUCCESS, payload:res.data})
        }).catch(err => {
            dispatch({type: DELETE_TODO_FAILURE})
        })
}