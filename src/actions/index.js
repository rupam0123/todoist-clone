export const SET_TASK = 'SET_TASK'
export const SET_SHOW ='SET_SHOW'
export const SET_CALENDER='SET_CALENDER'
export const SET_DATE ='SET_DATE'
export const SET_SELECTED_PROJECT ='SET_SELECTED_PROJECT'
export const GET_TASK ='GET_TASK'
export const SHOW_PROJECT ='SHOW_PROJECT'
export const SET_PROJECT = 'GET_PROJECT'
export const SET_PROJECT_NAME ='SET_PROJECT_NAME'
export const SET_SELECTED_PROJECTID_ID='SET_SELECTED_PROJECTID_ID'
export const SET_ACTIVE='SET_ACTIVE'
export const SET_SHOW_CONFIRM = 'SET_SHOW_CONFIRM'
export const SET_SHOW_PROJECTLIST='SET_SHOW_PROJECTLIST'
export const SET_SHOW_PROJECT_TASK='SET_SHOW_PROJECT_TASK'
export const SET_SHOW_PROJECT_NAME ='SET_SHOWPROJECT_NAME'



export const setProject = (payload)=>({type:SET_PROJECT,payload})
export const setShowConfirm=(payload)=>({type:SET_SHOW_CONFIRM,payload})
export const setProjectName=(payload)=>({type:SET_PROJECT_NAME,payload})
export const setTask =(payload)=>({type:SET_TASK,payload})
export const getTasks =(payload)=>({type:GET_TASK,payload})
export const setShow =(payload)=>({type:SET_SHOW,payload})
export const setCalender=(payload)=>({type:SET_CALENDER,payload})
export const setDate=(payload)=>({type:SET_DATE,payload})
export const setSelectedProject=(payload)=>({type:SET_SELECTED_PROJECT,payload})
export const setSelectedProjectId=(payload)=>({type:SET_SELECTED_PROJECTID_ID,payload})
export const setShowProjectList=(payload)=>({type:SET_SHOW_PROJECTLIST,payload})
export const setShowProjectTask =(payload)=>({type:SET_SHOW_PROJECT_TASK,payload})
export const setShowProjectName =(payload)=>({type:SET_SHOW_PROJECT_NAME,payload})
export const setShowProject =(payload)=>({type:SHOW_PROJECT,payload})