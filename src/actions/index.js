export const SET_TASK = 'SET_TASK'
export const SET_SHOW ='SET_SHOW'
export const SET_CALENDER='SET_CALENDER'
export const SET_DATE ='SET_DATE'
export const SET_SELECTED_PROJECT ='SET_SELECTED_PROJECT'
export const GET_TASK ='GET_TASK'
export const SHOW_PROJECT ='SHOW_PROJECT'
export const GET_PROJECT = 'GET_PROJECT'

export const getProject = (payload)=>({type:GET_PROJECT,payload})
export const setTask =(payload)=>({type:SET_TASK,payload})
export const getTasks =(payload)=>({type:GET_TASK,payload})
export const setShow =(payload)=>({type:SET_SHOW,payload})
export const setCalender=(payload)=>({type:SET_CALENDER,payload})
export const setDate=(payload)=>({type:SET_DATE,payload})
export const setSelectedProject=(payload)=>({type:SET_SELECTED_PROJECT,payload})
export const setShowProject =(payload)=>({type:SHOW_PROJECT,payload})