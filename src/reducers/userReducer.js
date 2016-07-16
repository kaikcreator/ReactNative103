import { UPDATE_USER_ACTION } from '../actions/types';


export default function(state={}, action){
    switch(action.type){
        case UPDATE_USER_ACTION:
            return action.payload;
        default:
            return state;
    }
}