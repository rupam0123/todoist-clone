import React from "react";
import { useTasks } from "../hooks";
import { AddTask } from "./AddTask";
import { Checkbox } from "./Checkbox";

export const Tasks = () => {
  const { tasks } = useTasks("1");

  console.log(tasks);

  const projectName = "";

  return (
    <div>
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="task__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
};
