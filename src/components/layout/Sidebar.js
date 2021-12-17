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
      className="left-menu-container"
      style={{ background: "blanchedalmond" }}
    >
      <div>
        <ul className="top-filters p-0 m md:m-0" style={{ listStyle: "none" }}>
          <NavLink to="project" activeClassName="current">
            <li
              className="filter"
              onClick={() => {
                dispatch(setSelectedProject("INBOX"));
                dispatch(setShowProjectTask(false));
              }}
            >
              <span className="filter__icon">
                <FaInbox color="#246fe0" />
              </span>
              <span className="filter__content">Inbox</span>
            </li>
          </NavLink>
          <NavLink to="today" activeClassName="current">
            <li
              className="filter"
              onClick={() => {
                dispatch(setSelectedProject("TODAY"));
                dispatch(setShowProjectTask(false));
              }}
            >
              <span className="filter__icon">
                <FaRegCalendar />
              </span>
              <span className="filter__content">Today</span>
            </li>
          </NavLink>
          <NavLink to="upcoming" activeClassName="current">
            <li
              className="filter"
              onClick={() => {
                dispatch(setSelectedProject("NEXT_7"));
                dispatch(setShowProjectTask(false));
              }}
            >
              <span className="filter__icon">
                <FaRegCalendarAlt />
              </span>
              <span className="filter__content">Next 7 days</span>
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
