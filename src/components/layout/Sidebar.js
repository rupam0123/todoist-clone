import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { NavLink } from "react-bootstrap";
import {
  setSelectedProject,
  setSelectedProjectId,
  setShowProject,
  setShowProjectTask,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";
export const Sidebar = () => {
  const dispatch = useDispatch();
  const showProjects = useSelector((state) => state.projectData.showProject);

  return (
    <div
      style={{ background: "blanchedalmond",marginLeft:'100px'}}
    >
      <div>
        <ul className="top-filters p-0 m md:m-0" style={{ listStyle: "none" }}>
          <NavLink to="project" activeClassName="current">
            <li
              className="filter"
              onClick={() => {
                dispatch(setSelectedProject("INBOX"));
                dispatch(setShowProjectTask(false));
                dispatch(setSelectedProjectId(""))
              }}
            >
              <span className="show-mouse"><FaInbox color="#246fe0" />Inbox</span>
            </li>
          </NavLink>
          <NavLink to="today" activeClassName="current">
            <li
              className="filter"
              onClick={() => {
                dispatch(setSelectedProject("TODAY"));
                dispatch(setShowProjectTask(false));
                dispatch(setSelectedProjectId(""))
              }}
            >
              <span className="show-mouse"><FaRegCalendar />Today</span>
            </li>
          </NavLink>
          <NavLink to="upcoming" activeClassName="current">
            <li
              className="filter"
              onClick={() => {
                dispatch(setSelectedProject("NEXT_7"));
                dispatch(setShowProjectTask(false));
                dispatch(setSelectedProjectId(""));
              }}
            >
              <span className="show-mouse"><FaRegCalendarAlt />Next 7 days</span>
            </li>
          </NavLink>
        </ul>
        <div
          onClick={() => dispatch(setShowProject(!showProjects))}
          onKeyDown={(e) => {
            if (e.key === "Enter") dispatch(setShowProject(!showProjects));
          }}
          role="button"
          tabIndex={0}
        >
          <span style={{ color: "crimson" }}>
            <FaChevronDown />
            Projects
          </span>
        </div>
      </div>
      {showProjects ? (
        <>
          {" "}
          <Projects /> <AddProject />
        </>
      ) : (
        ""
      )}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
