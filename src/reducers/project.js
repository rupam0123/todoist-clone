import { SET_PROJECT, SET_PROJECT_NAME, SHOW_PROJECT } from "../actions";

const initialState = {
  showProject: false,
  project:[],
  projectName:''
};

export const projectData = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROJECT:
      return {
        ...state,
        showProject: action.payload,
      };
      case SET_PROJECT:
        return {
          ...state,
          project: action.payload,
        };
      case SET_PROJECT_NAME:
        return {
          ...state,
          projectName: action.payload,
          };    
    default:
      return state;
  }
};
