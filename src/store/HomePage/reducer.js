import { ConstantData } from "./constants"

const dataState = {
        shopData:[]
}

export function HomePageReducer(state = {...dataState},action){
        const newState = {...state}
    if(action.type === ConstantData.PUT_DATA){
            newState.shopData = [...action.payload]
    }
        return newState
}