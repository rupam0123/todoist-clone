import React from "react";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = () => {
  
  return(
  <section>
    <div className="row">
      <div className="col-sm-3">
        <Sidebar />
      </div>
    <div className="col-sm-3"> <Tasks /></div>
    </div>
  </section>
);
}
