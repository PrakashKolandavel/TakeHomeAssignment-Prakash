import { ConstantData } from "./constants"

const dataState = {
        cartData:[]
}

export function CartReducer(state = {...dataState},action){
        const newState = {...state}
    if(action.type === ConstantData.SEND_CART_DATA){
            newState.cartData = [...action.payload]
    }
        return newState
}