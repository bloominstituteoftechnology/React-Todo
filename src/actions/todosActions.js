export const FETCHING_TODOS_START= "FETCHING_TODOS_START";
export const FETCHING_TODOS_SUCCESS= "FETCHING_TODOS_SUCCESS";
export const FETCHING_TODOS_FAILURE= "FETCHING_TODOS_FAILURE";


const headers = {
    Accept: "application/json"
}
export const getTodos = () => dispatch => {
    dispatch({type: FETCHING_TODOS_START});
}