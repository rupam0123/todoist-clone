import { SET_ADD_PROJECT_TASK, SET_PROJECT, SET_PROJECT_NAME, SET_SELECTED_PROJECTID_ID, SET_SHOW_CONFIRM, SET_SHOW_PROJECTLIST, SET_SHOW_PROJECT_NAME, SET_SHOW_PROJECT_TASK, SHOW_PROJECT } from "../actions";

const initialState = {
  showProject: false,
  project:[],
  projectName:'',
  projectId:'',
  showConfirm:false,
  showProjectList:false,
  showProjectTask:false,
  showProjecteName:'',
  addProjectTask:false
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
      case SET_SELECTED_PROJECTID_ID:
        return {
          ...state,
          projectId: action.payload,
        };
      case SET_SHOW_CONFIRM:
        return {
        ...state,
        showConfirm: action.payload,
      };
      case SET_SHOW_PROJECTLIST:
        return {
        ...state,
        showProjectList: action.payload,
      };
      case SET_SHOW_PROJECT_TASK:
        return {
        ...state,
        showProjectTask: action.payload,
      };
      case SET_SHOW_PROJECT_NAME:
        return {
        ...state,
        showProjecteName: action.payload,
      };
      case SET_ADD_PROJECT_TASK:
        return {
        ...state,
        addProjectTask: action.payload,
      };          
    default:
      return state;
  }
};
