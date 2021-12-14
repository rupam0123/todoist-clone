import { SET_CALENDER, SET_DATE, SET_SELECTED_PROJECT, SET_SHOW, SET_TASK } from "../actions";

const initialState = {
    task:'',
    show:false,
    calender:false,
    date:'',
    selectedProjet:'INBOX'
}

export const addTask=(state=initialState,action)=>{
    switch(action.type){
        case SET_TASK:
            return{
                ...state,
                task:action.payload
            }
        case SET_SHOW:
            return{
                ...state,
                show:action.payload
            } 
        case SET_CALENDER:
            return{
                ...state,
                calender:action.payload
            } 
        case SET_DATE:{
            return{
                ...state,
                date:action.payload
            }
        }
        case SET_SELECTED_PROJECT:{
            return{
                ...state,
                selectedProjet:action.payload
            }
        }           
        default:
            return state  
    }
}