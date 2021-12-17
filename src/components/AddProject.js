import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import { useSelector,useDispatch} from 'react-redux';
import { setProject, setProjectName, setShowProject } from '../actions';

export const AddProject = () => {
  const show=useSelector((state)=>state.projectData.showProject)
  const {project,projectName}=useSelector((state)=>state.projectData)
  const dispatch = useDispatch();
  const projectId =new Date().getTime().toString();


  const addProject = () =>
  
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'zmUMzQzYeMsIMDWtxQVE',
      })
      .then(() => {
        dispatch(setProject([...project]));
        dispatch(setProjectName(''));
        dispatch(setShowProject(!show));
      });

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div>
          <input
            value={projectName}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
            type="text"
            placeholder="Name your project"
            style={{background:"azure"}}
          />
          <button
            type="button"
            style={{background:"cadetblue"}}
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span
            onClick={() => dispatch(setShowProject(false))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') dispatch(setShowProject(false));
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      {/* <span >+</span>
      <span onClick={() => dispatch(setShowProject(!show))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShowProject(!show));
        }}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span> */}
    </div>
  );
};

AddProject.propTypes = {
  shouldShow: PropTypes.bool,
};