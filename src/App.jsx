import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import AddTaskBtn from "./components/AddTaskBtn/AddTaskBtn";
function App() {
  const [taskData, setTaskData] = useState([]);
  const [addTaskFormShowing, setAddTaskFormShowing] = useState(false);
  return (
    <React.Fragment>
      <Header></Header>
      <TaskList taskData={taskData}></TaskList>
      <AddTaskForm taskData={taskData} setTaskData={setTaskData}></AddTaskForm>
      {console.log(taskData)}
      <AddTaskBtn
        // setTaskData={setTaskData}
        setAddTaskFormShowing={setAddTaskFormShowing}
      ></AddTaskBtn>
    </React.Fragment>
  );
}

export default App;
