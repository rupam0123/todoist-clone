import React from 'react'
import { useSelector } from 'react-redux'
import { useProjects } from '../hooks'

export  const Projects= ()=>{
    useProjects();
    const projects=useSelector((state)=>state.projectData.project)
    console.log('Project',projects);
    return(
        projects &&
    projects.map((project) => (
      <li key={project.projectId}>
          {project.name}
        {/* <div
        //   onClick={() => {
        //     setActive(project.projectId);
        //     setSelectedProject(project.projectId);
        //   }}
        //   onKeyDown={(e) => {
        //     if (e.key === 'Enter') {
        //       setActive(project.projectId);
        //       setSelectedProject(project.projectId);
        //     }
        //   }}
        >
          <IndividualProject project={project} />
        </div> */}
      </li>
    ))
  );
    
}