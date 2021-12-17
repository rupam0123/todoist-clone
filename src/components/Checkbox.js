import React from 'react'
import { FaSpaceShuttle ,FaCheck} from 'react-icons/fa';
import { firebase } from "../firebase"

export  const Checkbox =({id})=>{
    const archiveTask=()=>{
        firebase.firestore()
        .collection('tasks')
        .doc(id)
        .update({
          archived:true,
        }) ;
   };
   return(
       <FaCheck role="button" onClick={()=> archiveTask()}/>
   )
}