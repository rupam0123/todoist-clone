import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProjectId, setShowProjectList } from "../actions";

export const ProjectOverlay = () => {
  const { project, showProjectList } = useSelector((state) => state.projectData);
  const dispatch = useDispatch();
  return (
    project &&
    showProjectList && (
      <div>
        <ul>
          {project.map((project) => (
            <li key={project.projectId}>
              <div
                onClick={() => {
                  dispatch(setSelectedProjectId(project.projectId));
                  dispatch(setShowProjectList(!showProjectList));
                }}
                role="button"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

ProjectOverlay.propTypes = {
  projects: PropTypes.array,
};
