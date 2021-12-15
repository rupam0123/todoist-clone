import { GET_PROJECT, SHOW_PROJECT } from "../actions";

const initialState = {
  showProject: false,
  getProject:[]
};

export const projectData = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROJECT:
      return {
        ...state,
        showProject: action.payload,
      };
      case GET_PROJECT:
        return {
          ...state,
          getProject: action.payload,
        };  
    default:
      return state;
  }
};
