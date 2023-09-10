import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./ActionType";

let initialstate=[]

export const reducer=(state=initialstate,action)=>{
    switch (action.type)
     {
        case ADD_TODO:
            return [action.payload,...state]
          break;
        case DELETE_TODO:
            return state.filter((ele,i)=>i!==action.payload)
          break;
        case TOGGLE_TODO:
            return state.map((ele,i)=>{
              if(i==action.payload){
                return{...ele,isCompleted:!ele.isCompleted}
              }
              else{
                return ele
              }
            })
          break;
    
        default:
          return state
            break;
    }
}