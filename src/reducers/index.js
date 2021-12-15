import { combineReducers } from 'redux';
import { addTask } from './addTask';
import { projectData } from './project';



export default combineReducers({
   addTask,
   projectData
});