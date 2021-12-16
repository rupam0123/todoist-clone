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
} from "../actions";

export const IndividualProject = ({ projects }) => {
  const { project, showConfirm, showProject } = useSelector(
    (state) => state.projectData
  );
  const dispatch = useDispatch();
  const deleteProject = (docId) => {
    firebase.firestore().collection("projects").doc(docId).delete();
  };

  return (
    <>
      <span>{projects.name}</span>
      <span
        onClick={() => dispatch(setShowConfirm(!showConfirm))}
        tabIndex={0}
        role="button"
      >
        {" "}
        <FaTrashAlt />
        {showConfirm && (
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
        )}
      </span>
    </>
  );
};

IndividualProject.propTypes = {
  project: PropTypes.object.isRequired,
};
