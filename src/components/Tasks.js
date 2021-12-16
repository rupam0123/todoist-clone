import React from "react";
import { AddTask } from "./AddTask";
import { Checkbox } from "./Checkbox";
import {useSelector,useDispatch} from "react-redux" 
import { setShow } from "../actions";
import { hook } from "../hooks";
import  ShowProjects  from "./ShowProjects";

export const Tasks = () => {
  hook();
  const  task  = useSelector((state)=>state.addTask.getTask)
  const {showProjectTask} =useSelector((state)=>state.projectData)
  const dispatch= useDispatch();

  const handleClick=()=>{
    dispatch(setShow(true))
  }


  return (
    <div>
      {!showProjectTask?<><AddTask /> 
      <ul className="task__list" style={{listStyle:"none"}}>
        {task.map((task) => 
        <li key={`${task.id}`}>
        <Checkbox id={task.id} taskDesc={task.task} />
        <span>{task.task}</span>
      </li>
        )}
      </ul>
      </>
      :<ShowProjects/>}
      <li onClick={handleClick}> +{' '}add Task</li>
    </div>
  );
};
