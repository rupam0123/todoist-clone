import ListGroup from "react-bootstrap/ListGroup";
import { toggleTask } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const ShowProjects = () => {
  const dispatch = useDispatch();
  const {project,projectId,showProjecteName} = useSelector((state) => state.projectData);
  const {getTask} = useSelector((state)=>state.addTask)

  
  
  const addTaskToggle = useSelector((state) => state.tasks);
  
  return (
    <>
      <div className="col-md-6">
        <h2 className="my-3 text-center fst-italic">
          {showProjecteName}
        </h2>
        {getTask.map((i) => (
        ( i.projectId == projectId)? <li>{i.task}</li>:undefined)
        )}
      </div>
    </>
  );
};
export default ShowProjects;