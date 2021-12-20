import ListGroup from "react-bootstrap/ListGroup";
import { toggleTask } from "../actions";
import { useSelector} from "react-redux";

const ShowProjects = () => {
  const {projectId,showProjecteName} = useSelector((state) => state.projectData);
  const {getTask} = useSelector((state)=>state.addTask)
  
  return (
    <>
      <div className="col-md-6">
        <h2 className="project-head" >
          {showProjecteName}
        </h2>
        {getTask.map((i) => (
        ( i.projectId == projectId && i.archived !== true)? <li>{i.task}</li>:undefined)
        )}
      </div>
    </>
  );
};
export default ShowProjects;