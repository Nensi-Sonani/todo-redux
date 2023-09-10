import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./ActionType"

export const addtodo =(todo)=>{
    return{
        type:ADD_TODO,
        payload:todo
    }
}
export const deletetodo =(todo)=>{
    return{
        type:DELETE_TODO,
        payload:todo
    }
}
export const toggletodo =(todo)=>{
    return{
        type:TOGGLE_TODO,
        payload:todo
    }
}