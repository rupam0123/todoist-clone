import React from "react";
import { AddTask } from "../AddTask";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = () => {
  
  return(
  <section>
    <div className="row">
      <div className="col-sm-4">
        <Sidebar />
      </div>
    <div className="col-sm-6"> <Tasks /></div>
    <AddTask/>
    </div>
  </section>
);
}
