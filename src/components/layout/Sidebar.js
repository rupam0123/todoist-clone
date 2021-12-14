import React from 'react'
import { FaChevronDown,FaInbox, FaRegCalendarAlt,FaRegCalendar } from 'react-icons/fa';
import {NavLink} from 'react-bootstrap'
import { setSelectedProject } from '../../actions';
import { useDispatch } from 'react-redux';
export const Sidebar = () => {
  const dispatch=useDispatch()

  return(
      <div className="left-menu-container" >
        <div>
          <ul className="top-filters p-0 m md:m-0" style={{listStyle:"none"}}>
            <NavLink to="project" activeClassName="current">
              <li className="filter" onClick={()=>dispatch(setSelectedProject('INBOX'))}>
                <span className="filter__icon">
                  <FaInbox color="#246fe0" />
                </span>
                <span className="filter__content">Inbox</span>
              </li>
            </NavLink>
            <NavLink to="today" activeClassName="current">
              <li className="filter" onClick={()=>dispatch(setSelectedProject('TODAY'))}>
                <span className="filter__icon">
                  <FaRegCalendar />
                </span>
                <span className="filter__content">Today</span>
              </li>
            </NavLink>
            <NavLink to="upcoming" activeClassName="current">
              <li className="filter"onClick={()=>dispatch(setSelectedProject('7 DAYS'))}>
                <span className="filter__icon">
                  <FaRegCalendarAlt />
                </span>
                <span className="filter__content">Next 7 days</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

  );
}