import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";
import { collatedTasksExist } from "../helpers";
import { useSelector, useDispatch } from "react-redux";
import { getProject, getTasks, setSelectedProject } from "../actions";

export const hook = () => {
  const dispatch = useDispatch();
  const { selectedProject} = useSelector((state) => state.addTask);

  useEffect(() => {
    if (selectedProject === "INBOX") {
      let unsubscribe = firebase.firestore().collection("tasks");

      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          id: task.id,
          ...task.data(),
        }));
        dispatch(getTasks(newTasks));
      });
    } else if (selectedProject === "TODAY") {
      let unsubscribe = firebase.firestore().collection("tasks");

      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          id: task.id,
          ...task.data(),
        }));
        dispatch(
          getTasks(
            newTasks.filter(
              (data) =>
                data.date == moment().format("DD/MM/YYYY") || data.date == ""
            )
          )
        );
      });
    } else {
      let unsubscribe = firebase.firestore().collection("tasks");

      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          id: task.id,
          ...task.data(),
        }));
        dispatch(
          getTasks(
            newTasks.filter(
              (data) =>
              moment(data.date, 'DD-MM-YYYY').diff(moment().format('MMM D, YYYY') )>0
            )
          )
        );
      });
    }
  }, [selectedProject]);
}

export const useProjects =()=>{
    const dispatch=useDispatch();
    const projects =useSelector((state)=>state.projectData.getProject)
    useEffect(()=>{
        firebase
        .firestore()
        .collection('projects')
        .orderBy('projectId')
        .get()
        .then(snapshot=>{
            const allProjects=snapshot.docs.map(project =>({
                ...project.data(),
                docId:project.id
            }));

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)){
              dispatch(getProject(allProjects))
            }
        })
    },[])
}
