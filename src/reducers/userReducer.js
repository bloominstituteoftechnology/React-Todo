import { CREATE_USER_FAILURE, CREATE_USER_START, CREATE_USER_SUCCESS, USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from "../actions/userActions"


const user = {
    user_id : "",
    user_name : "",
    loading: false
}

export const userReducer = ( state = user, action ) => {
    switch( action.type ) {
        case CREATE_USER_START:
            return {...state, loading: true };
        case CREATE_USER_SUCCESS:
            console.log(action.payload)
            return {...state, user_id:action.payload.user_id, user_name: action.payload.user_name, loading: false } 
        case CREATE_USER_FAILURE:
            return {...state, loading: false }
        case USER_LOGIN_START:
            return {...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return {...state, user_id:action.payload.user_id, user_name: action.payload.user_name, loading: false }
        case USER_LOGIN_FAILURE:
            return {...state, loading: false }
        case USER_LOGOUT:
            return {...state, user_id: "", user_name: "", loading:false }
        default:
            return state;
    }
}