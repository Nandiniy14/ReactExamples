import * as types from './actionTypes';

export function submitAction(data) {
    return {
        type: types.SUBMIT_ACTION, 
        data
    }
} 