import submitReducer from './submitReducer';
import * as types from '../Actions/actionTypes';

// describe('submit reducer', () => {
//     it('should handle SUBMIT_ACTION', () => {
//         expect(
//             submitReducer([], {
//                 type : types.SUBMIT_ACTION,
//                 data : {
//                     id:'1',
//                     name:'NandiniY',
//                     phone:'9999999999',
//                     email:'nanj@gmail.com'
//                 }
//             })
//         ).toEqual([
//            {
//                data : {
//                 id:'1',
//                 name:'NandiniY',
//                 phone:'9999999999',
//                 email:'nanj@gmail.com'
//             }
//            }
//         ])
//     })
// }

// )

describe('submit reducer', () => {
    it('should handle SUBMIT_REDUCER', () => {
      expect(
        submitReducer([], {
          type: types.SUBMIT_ACTION,
          data: {
                    id:'1'
                    // name:'NandiniY',
                    // phone:'9999999999',
                    // email:'nanj@gmail.com'
                }
        })
      ).toEqual([
        {
          data: {
            id:'1'
            // name:'NandiniY',
            // phone:'9999999999',
            // email:'nanj@gmail.com'
          }
        }
      ])
    //   expect(
    //     submitReducer(
    //       [],
    //       {
    //         type: types.SUBMIT_ACTION,
    //         data: ''
    //       }
    //     )
    //   ).toEqual([
    //     {
    //       data : ''
    //     }
    //   ])
    })
  })