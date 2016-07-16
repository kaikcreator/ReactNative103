import { 
  UPDATE_USER_ACTION 
} from './types';


export function updateUser(user) {
  return {
    type: UPDATE_USER_ACTION,
    payload: user
  }
}
