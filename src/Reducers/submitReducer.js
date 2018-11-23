import * as types from '../Actions/actionTypes';

export default function submitReducer(state = [], action) {
    switch (action.type) {
        case types.SUBMIT_ACTION:
            return [...state, Object.assign({}, action.data)];
        default:
            return state;
    }
}