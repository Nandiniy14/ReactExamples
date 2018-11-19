import * as types from './actionTypes';

export function emailAction(email) {
    return {
        type: types.EMAIL, email
    }
} 