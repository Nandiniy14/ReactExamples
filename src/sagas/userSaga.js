import {delay} from 'redux-saga';
export function* userSaga(){
    while(true){
       yield delay(1000);
        console.log("Saga");
    }

}