import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { NavLink } from "react-bootstrap";
import { setSelectedProject, setShowProject } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";
export const Sidebar = () => {
  const dispatch = useDispatch();
  const showProjects = useSelector((state) => state.projectData.showProject);
  console.log('true or false',showProjects)

  return (
    <div className="left-menu-container">
      <div>
        <ul className="top-filters p-0 m md:m-0" style={{ listStyle: "none" }}>
          <NavLink to="project" activeClassName="current">
            <li
              className="filter"
              onClick={() => dispatch(setSelectedProject("INBOX"))}
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
              onClick={() => dispatch(setSelectedProject("TODAY"))}
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
              onClick={() => dispatch(setSelectedProject("NEXT_7"))}
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
          <span>
            <FaChevronDown
              className={!showProjects ? "hidden-projects" : undefined}
            />
          </span>
          <h4>Projects</h4>
        </div>
      </div>
      <ul >{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
