import axios from "axios";

export const CREATE_USER_START="CREATE_USER_START";
export const CREATE_USER_SUCCESS="CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE="CREATE_USER_FAILURE";

export const DELETE_USER_START="DELETE_USER_START";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE="DELETE_USER_FAILURE";

export const USER_LOGIN_START="USER_LOGIN_START";
export const USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE="USER_LOGIN_FAILURE";

export const USER_LOGOUT = "USER_LOGOUT";

const headers = {
    Accept: "application/json"
}


export const createUser = (user, setUser) => dispatch => {
    dispatch({type: CREATE_USER_START})
    axios.post("https://toodueapp.herokuapp.com/api/users/signup/", user).then(res => {
        console.log(res)
        setUser({
            user_name: "",
            password: ""
        })
        localStorage.setItem('token', res.data.token)
        dispatch({type: CREATE_USER_SUCCESS, payload: res.data.newUser})
    }).catch(err => {
        dispatch({type:CREATE_USER_FAILURE})
        console.log(err)
    })
}

export const login = (user, setUser) => dispatch => {
    dispatch({ type: USER_LOGIN_START})
    axios.post("https://toodueapp.herokuapp.com/api/users/login/", user).then(
        res => {
            console.log(res.data.user)
            setUser({
                user_name: "",
                password: ""
            })
            localStorage.setItem('token', res.data.token)
            dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.user})
        }
    ).catch(err => {
        dispatch({type: USER_LOGIN_FAILURE})
        console.log(err)
    })
}

export const deleteUser = (user_id) => dispatch => {
    dispatch({type: DELETE_USER_START})
    axios.delete(`https://toodueapp.herokuapp.com/api/users/${user_id}`, {headers})
        .then(res => {
            console.log(res)
            dispatch({type:DELETE_USER_SUCCESS})
        }).catch(err => {
            console.log(err)
            dispatch({type: DELETE_USER_FAILURE})
        })
}

export const userLogout = () => dispatch => {
    dispatch({ type: USER_LOGOUT })
}