import {  useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {  getTasks, setDate, setProject } from "../actions";

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
        dispatch(getTasks(newTasks.filter((data)=>data.archived !== true)))
      });
      dispatch(setDate(moment().format('DD/MM/YYYY')))
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
                data.date == moment().format("DD/MM/YYYY") &&
                data.archived !== true
            )
          )
        );
      });
      dispatch(setDate(moment().add(1, 'day').format('DD/MM/YYYY')))
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
              moment(data.date, 'DD-MM-YYYY').diff(moment().format('MMM D, YYYY') )>0&&
              data.archived !== true
            )
          )
        );
      });
    }
    dispatch(setDate(moment().add(7, 'days').format('DD/MM/YYYY')))
  }, [selectedProject]);
}

export const useProjects =()=>{
    const dispatch=useDispatch();
    const projects =useSelector((state)=>state.projectData.getProject)
    useEffect(()=>{
        firebase
        .firestore()
        .collection('projects')
        .get()
        .then(snapshot=>{
            const allProjects=snapshot.docs.map(project =>({
                ...project.data(),
                docId:project.id
            }));

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)){
              dispatch(setProject(allProjects))
            }
        })
    },[])
}
