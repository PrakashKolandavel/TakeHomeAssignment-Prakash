import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { ConstantData } from './constants';
import service from '../../Service/service'
import Data from './data.json'
export const homePageAction = {
    getData:()=>{
        return {type:ConstantData.GET_DATA}
    },
    putData:(data)=>{
        return {type:ConstantData.PUT_DATA,payload:data}
    }
}

function* getData(){
    const url = 'https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json'
try{
    const response = yield call(service.get,url)
    const fur_response = response['data']
    yield put(homePageAction.putData(Data))
                        
}
catch(e){
    console.log(e)
}
}


export function* amSaga() {
    yield takeLatest(ConstantData.GET_DATA,getData)
}