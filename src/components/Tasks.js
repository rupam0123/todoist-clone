import React from "react";
import { AddTask } from "./AddTask";
import { Checkbox } from "./Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../actions";
import { hook } from "../hooks";
import ShowProjects from "./ShowProjects";

export const Tasks = () => {
  hook();
  const { getTask, selectedProject } = useSelector((state) => state.addTask);
  const { showProjectTask } = useSelector((state) => state.projectData);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShow(true));
  };

  return (
    <div style={{marginLeft:'200px'}}>
      {!showProjectTask ? (
        <>
          <div className="color-code" >
            {selectedProject === "INBOX" ? (
              <h3>Inbox</h3>
            ) : selectedProject === "TODAY" ? (
              <h3>Today</h3>
            ) : (
              <h3>In 7 Days</h3>
            )}
          </div>
          <ul className="task__list" style={{ listStyle: "none" }}>
            {getTask.map((task) => (
              <li  key={`${task.id}`}>
                <Checkbox id={task.id} taskDesc={task.task} />{" "}
                <span >{task.task}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ShowProjects />
      )}
      <li onClick={handleClick} style={{listStyle:'none',color:'orangered'}} > + <span style={{color:'black'}}>add Task</span> </li>
    </div>
  );
};
