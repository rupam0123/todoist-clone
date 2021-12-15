import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export const AddTask=()=>{
    const {selectedProject} = useSelector((state)=>state.addTask)
    
    return(
        <>
        {selectedProject==="INBOX"?<h3>Inbox</h3>:selectedProject==="TODAY"?<h3>Today</h3>:<h3>In 7 Days</h3>}
        </>
    )
    
}