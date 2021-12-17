import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCalender, setDarkmode, setShow, setShowProjectList, setTask } from "../../actions";

export const Header = () => {
  const dispatch = useDispatch();
  const addTask = useSelector((state) => state.addTask);
  console.log('darkmode',addTask.darkmode)
  

  const handleClick = () => {
    dispatch(setShow(true));
  };
  

  

  return (
    <div className="navbar navbar-expand-lg">
      <div className={addTask.darkmode? 'darkmode': 'defaultmode'}>
      <nav>
        <div className="collapse navbar-collapse" id="navbarText" style={{width:'1300px'}}>
          <img className="image-todoist" src="/images/logo.png" alt="Todoist" /> 
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="settings__add " onClick={handleClick} role="button">
                +
              </li>
              <li className="nav-item px-3">
                <FaPizzaSlice onClick={()=>dispatch(setDarkmode(!addTask.darkmode))}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};
