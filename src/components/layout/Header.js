import React from "react";
import { FaPizzaSlice, FaRegCalendar,FaRegListAlt,FaRegCalendarAlt } from "react-icons/fa";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCalender, setShow, setShowProjectList, setTask } from "../../actions";
import { firebase } from "../../firebase";
import { TaskDate } from "./TaskDate";
import { ProjectOverlay } from "../ProjectOverlay";

export const Header = () => {
  const dispatch = useDispatch();
  const addTask = useSelector((state) => state.addTask);
  const {showProjectList,projectId} = useSelector((state)=>state.projectData)

  const handleClick = () => {
    dispatch(setShow(true));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    const addNew = { ...addTask.task, [name]: value };
    dispatch(setTask(addNew));
  };

  const handleClose = () => {
    dispatch(setShow(false));
    dispatch(setCalender(false));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const setFireBase = firebase.firestore();
    setFireBase.collection("tasks").add({
      task: addTask.task.task,
      date: addTask.date,
      archived:false,
      projectId
      
    });

    dispatch(setShow(false));
  };
  const handleCalender = () => {
    dispatch(setCalender(!addTask.calender));
    
  };
  const handleShowProject=()=>{
    dispatch(setShowProjectList(!showProjectList))
  }

  return (
    <div
      className="navbar navbar-expand-lg"
      style={{
        display: "flex",
        justifyContent: "center",
        color: "white",
        backgroundColor: "orangered",
      }}>
      <nav>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="settings__add " onClick={handleClick} role="button">
                +
              </li>
              <li className="nav-item px-3">
                <FaPizzaSlice />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal show={addTask.show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Quick Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" name="task" onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="danger" onClick={handleClose}>
              Add Task
            </Button>
            {addTask.calender ? (
              <TaskDate />
            ) : (
              <FaRegCalendarAlt onClick={() => handleCalender()} />
            )}
            {showProjectList ? (
              <ProjectOverlay />
            ) : (
              <FaRegListAlt onClick={() => handleShowProject()} />
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
