import React from "react";
import { AddTask } from "./AddTask";
import { Checkbox } from "./Checkbox";
import {useSelector,useDispatch} from "react-redux" 
import { setShow } from "../actions";
import { hook } from "../hooks";

export const Tasks = () => {
  hook();
  const  task  = useSelector((state)=>state.addTask.getTask)
  const dispatch= useDispatch();

  const handleClick=()=>{
    dispatch(setShow(true))
  }


  const projectName = "";

  return (
    <div>
      <AddTask />
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="task__list" style={{listStyle:"none"}}>
        {task.map((task) => 
        <li key={`${task.id}`}>
        <Checkbox id={task.id} taskDesc={task.task} />
        <span>{task.task}</span>
      </li>
        )}
      </ul>
      <li onClick={handleClick}> +{' '}add Task</li>
    </div>
  );
};
