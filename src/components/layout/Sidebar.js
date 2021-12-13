import React from 'react'
import { FaChevronDown,FaInbox, FaRegCalendarAlt,FaRegCalendar } from 'react-icons/fa';

export const Sidebar = () => (
  <div className="slidebar" data-testid="slidebar">
    <ul className="slidebar__generic">
      <li>
      <span>
        <FaInbox/>
        </span>
        <span>Inbox</span>
      </li>
      <li>
      <span>
        <FaRegCalendar/>
      </span>
         <span>Today</span>
      </li>
      <li>
      <span>
        <FaRegCalendarAlt/>
        </span>
        <span>Next 7 Days</span>
      </li>
      </ul>
      <div className="slidebar__middile">
        <span>
          <FaChevronDown/>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="slidebar__projects">projects will be here!</ul>
      Add projects Components here!

  </div>
);