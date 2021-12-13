import React,{createContext,useContext} from 'react'
import { useProjects } from '../hooks'

export const selec = createContext();
export const ProjectProvider = ({children})=>{
    const {projects,setProjects} = useProjects();

    return(
        <ProjectContext.provider value={{projects,setProjects}}>
            {children}
        </ProjectContext.provider>
    )
}

export const useProjectsValue=()=> useContext(projectsContext);
