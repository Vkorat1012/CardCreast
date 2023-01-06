
import { ADD_TO_CARD ,REMOVE_FROM_CARD } from "./types" 
export const add_to_card = (data)=>{
    return{
        type : ADD_TO_CARD,
        payload  : data
    }
}
export const remove_from_card = (data)=>{
    return{
        type : REMOVE_FROM_CARD,
        payload  : data
    }
}