import React,{useEffe} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setSelectedProject, setSelectedProjectId, setShowProjectName, setShowProjectTask } from '../actions';
import { useProjects } from '../hooks';
import { IndividualProject } from './IndividualProject';


export  const Projects= ()=>{
  useProjects();
    const projects=useSelector((state)=>state.projectData.project)
    const dispatch = useDispatch();

    return(
        projects &&
    projects.map((project) => (
      <li key={project.projectId} style={{listStyle:"none"}}>
        <div
          onClick={() => {
            dispatch(setSelectedProjectId(project.projectId));
            dispatch(setShowProjectName(project.name))
            dispatch(setShowProjectTask(true))
            dispatch(setSelectedProject("INBOX"))
          }}>
          <IndividualProject projects={project}/>
        </div>
      </li>
    ))
  );
    
}