import React from "react";
import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { TaskDate } from "./layout/TaskDate";
import { ProjectOverlay } from "./ProjectOverlay";
import {firebase} from "../firebase";
import { Button, Form, Modal } from "react-bootstrap";
import { setCalender, setShow, setShowProjectList, setTask } from "../actions";

export const AddTask = () => {
  const dispatch = useDispatch();
  const addTask = useSelector((state) => state.addTask);
  const { showProjectList, projectId } = useSelector((state) => state.projectData);
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
      archived: false,
      projectId,
    });

    dispatch(setShow(false));
  };
  const handleCalender = () => {
    dispatch(setCalender(!addTask.calender));
  };
  const handleShowProject = () => {
    dispatch(setShowProjectList(!showProjectList));
  };

  return (
    <>
      <Modal show={addTask.show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{addTask.selectedProject=="NEXT_7"?<>add Weekly task</>:addTask.selectedProject=='TODAY'?<>Today</>:<>QuickADD</>}</Modal.Title>
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
    </>
  );
};
