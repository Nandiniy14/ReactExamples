import * as types from './actionTypes';
import * as actions from './submitAction';
import expect from 'expect';

describe('actions',() => {
    it('should create an action to submit', () => {
        const data = {
            id:'1',
            name:'NandiniY',
            phone:'9999999999',
            email:'nanj@gmail.com'
        }
        const expectedAction = {
            type : types.SUBMIT_ACTION,
            data
        }
        expect(actions.submitAction(data)).toEqual(expectedAction)
    })
})