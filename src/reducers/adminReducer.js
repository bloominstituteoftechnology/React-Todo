import { FETCH_STORIES } from "../actions/adminActions";
import {stories} from "../utils/StoriesData"

const initialState = stories

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STORIES:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default adminReducer
