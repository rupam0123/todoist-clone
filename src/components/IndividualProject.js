import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { firebase } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  setProject,
  setSelectedProject,
  setShowConfirm,
  setShowProject,
  setShowProjectTask,
} from "../actions";

export const IndividualProject = ({ projects }) => {
  const { showConfirm, showProject, project, projectId,showProjecteName} = useSelector(
    (state) => state.projectData
  );
  
  const task = useSelector((state) => state.addTask.getTask);
  const dispatch = useDispatch();
  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        dispatch(setProject([...project]));
        dispatch(setSelectedProject("INBOX"));
        dispatch(setShowProjectTask(false));
      });
    let id = "";
    task.map((task) =>
      task.projectId === projectId
        ? (id = task.id)
          ? firebase
              .firestore()
              .collection("tasks")
              .doc(id)
              .delete()
              .then(() => {
                dispatch(setShowProjectTask(false));
              })
          : undefined
        : undefined
    );
  };

  return (
    <div className="show-mouse">
      <span role="button" style={{marginLeft:'50px'}}>
        {projects.name}{" "}
        <FaTrashAlt
          onClick={() => dispatch(setShowConfirm(!showConfirm))}
          role="button"
        />
        
        {showConfirm && projects.name==showProjecteName?(
          <div>
            <div>
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => {
                  deleteProject(projects.docId);
                  dispatch(setShowProject(!showProject));
                }}
              >
                Delete
              </button>
              <span onClick={() => dispatch(setShowConfirm(!showConfirm))}>
                Cancel
              </span>
            </div>
          </div>
        ):undefined}
      </span>
    </div>
  );
};

IndividualProject.propTypes = {
  project: PropTypes.object.isRequired,
};
