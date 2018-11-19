import * as types from '../actions/actionTypes';

export default function sampleReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_ACTION:
            return [...state, Object.assign({}, action.name)];
        case types.EMAIL:
            return [...state, Object.assign({}, action.email)];
        default:
            return state;
    }
}