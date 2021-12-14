import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export const AddTask=()=>{
    const {selectedProjet} = useSelector((state)=>state.addTask)
    
    return(
        <>
        {selectedProjet==="INBOX"?<h3>Inbox</h3>:selectedProjet==="TODAY"?<h3>Today</h3>:<h3>In 7 Days</h3>}
        </>
    )
    
}