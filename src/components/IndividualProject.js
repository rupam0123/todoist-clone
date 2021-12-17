import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { firebase } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowConfirm,
  setShowProject,
} from "../actions";

export const IndividualProject = ({ projects }) => {
  const { showConfirm, showProject,projectId } = useSelector(
    (state) => state.projectData
  );
  const dispatch = useDispatch();
  const deleteProject = (docId) => {
    firebase.firestore().collection("projects").doc(docId).delete();
  };

  return (
    <div  className="show-mouse">
      <span role="button">{projects.name}
        <FaTrashAlt onClick={() => dispatch(setShowConfirm(!showConfirm))}
        role="button"/>
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
    </div>
  );
};

IndividualProject.propTypes = {
  project: PropTypes.object.isRequired,
};
