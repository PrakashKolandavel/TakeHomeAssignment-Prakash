import { put, takeEvery, call, takeLatest, select } from 'redux-saga/effects';
import { ConstantData } from './constants';

export const cartAction = {
    storeCartdata:(payload)=>{
        return {type:ConstantData.GET_CART_DATA,payload}
    },
    sendcartData:(data)=>{
        return {type:ConstantData.SEND_CART_DATA,payload:data}
    },
    getFromCart:(data)=>{
        return {type:ConstantData.GET_DATA_FROM_CART,payload:data}
    }
}

function* getCartData({payload}){
try{
    const getCartData = yield select()
    let {cartData} = getCartData.CartReducer
    if(cartData.length === 0)
        cartData.push({...payload,count:1})
    else{
        const alreadyDatain  = false
        cartData.map(data=>{
            if(data.id === payload.id && data.options.value === payload.options.value){
                data.count += 1
                alreadyDatain = true
            }
            return data
        })
        if(!alreadyDatain){
            cartData.push({...payload,count:1})
        }
    }
    yield put(cartAction.sendcartData(cartData))


}
catch(e){
    console.log(e)
}
}
function* getDataFromCart({payload}){
    try{
       
        yield put(cartAction.sendcartData(payload))

    }
    catch(e){
        console.log(e)
    }
}

export function* cartSaga() {
    yield takeLatest(ConstantData.GET_CART_DATA,getCartData);
    yield takeLatest(ConstantData.GET_DATA_FROM_CART,getDataFromCart)
}