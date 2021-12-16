import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useProjectsValue } from '../context';
import { firebase } from '../firebase';
import { useSelector,useDispatch} from 'react-redux';
import { setProject, setProjectName, setShowProject } from '../actions';

export const AddProject = () => {
  const show=useSelector((state)=>state.projectData.showProject)
  const {project,projectName}=useSelector((state)=>state.projectData)
  const dispatch = useDispatch();
  console.log(project)
  const projectId =new Date().getTime();

//   const { projects, setProjects } = useProjectsValue();

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
        dispatch(setShowProject(false));
      });

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
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
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => dispatch(setShowProject(!show))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShowProject(!show));
        }}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};

AddProject.propTypes = {
  shouldShow: PropTypes.bool,
};