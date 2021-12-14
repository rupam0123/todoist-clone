import React from "react";
import { FaPizzaSlice,FaRegCalendar } from "react-icons/fa"
import {Button, Form, Modal} from 'react-bootstrap'
import { useDispatch,useSelector} from "react-redux";
import { setCalender, setShow, setTask} from "../../actions";
import {firebase} from '../../firebase';
import { TaskDate } from "./TaskDate";

export const Header = () => {
  const dispatch= useDispatch();
  const addTask=useSelector((state)=>state.addTask)

  const handleClick=()=>{
    dispatch(setShow(true))
  }
  const handleChange=(event)=>{
    const { name, value } = event.target;
    const addNew = { ...addTask.task, [name]: value };
    dispatch(setTask(addNew));

  }

  const handleClose=()=>{
  dispatch(setShow(false))
  dispatch(setCalender(false))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const setFireBase =firebase.firestore();
      setFireBase.collection("tasks").add({
      task:addTask.task,date:addTask.date
    })

    dispatch(setShow(false))
  }
  const handleCalender=()=>{
    dispatch(setCalender(!addTask.calender));
    console.log(addTask.calender)
  }


  return (
    
    <div className="navbar navbar-expand-lg" style={{
      display: 'flex',
      justifyContent: 'center',
      color: 'yellow',
      backgroundColor: 'orangered'
    }}>
      <nav >
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="settings__add ">
                <Button onClick={handleClick}>+</Button></li>
              <li className="nav-item px-3">
                <Button>
                  <FaPizzaSlice />
                </Button>
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
          <input type="text" name="task" onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleClose}>
            Add Task
          </Button>
          {addTask.calender ?<TaskDate/>:<FaRegCalendar onClick={()=>handleCalender()}/>}
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

