import moment from "moment";
import React from "react";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import { useDispatch,useSelector } from "react-redux";
import { setCalender, setDate } from "../../actions";

export const TaskDate = () => {
  const dispatch=useDispatch();
  const date=useSelector((state)=>state.addTask.date)
  const handleClick=()=>{
    dispatch(setCalender(false))
  }

  return(
  <>
    <ul style={{listStyle:"none"}} onClick={handleClick}>
      <li onClick={()=>dispatch(setDate(moment().format('DD/MM/YYYY')))}>
      <span><FaSpaceShuttle/></span>
        <span>Today</span>
      </li>
      <li onClick={()=>dispatch(setDate(moment().add(1, 'day').format('DD/MM/YYYY')))}>
      <span><FaSun/></span>
        <span>Tomorrow</span>
      </li>
      <li onClick={()=>dispatch(setDate(moment().add(7, 'days').format('DD/MM/YYYY')))}>
      <span><FaRegPaperPlane/></span>
        <span>Next Week</span>
      </li>
    </ul>
  </>
  );
}