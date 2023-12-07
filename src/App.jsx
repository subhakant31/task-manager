import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import AddTaskBtn from "./components/AddTaskBtn/AddTaskBtn";
import ErrorText from "./components/ErrorText/ErrorText";
import SortByBtn from "./components/SortByBtn/SortByBtn";
function App() {
  const [taskData, setTaskData] = useState([]);
  const [taskFormVisible, setTaskFormVisible] = useState(false);

  return (
    <React.Fragment>
      <Header></Header>
      {console.log(taskData)}
      {taskData.length !== 0 && (
        <SortByBtn taskData={taskData} setTaskData={setTaskData}></SortByBtn>
      )}

      <TaskList
        setTaskFormVisible={setTaskFormVisible}
        taskData={taskData}
        setTaskData={setTaskData}
      ></TaskList>
      {taskData.length === 0 && (
        <ErrorText errorMessage='No task has been added'></ErrorText>
      )}
      {taskFormVisible && (
        <AddTaskForm
          taskData={taskData}
          setTaskData={setTaskData}
          setTaskFormVisible={setTaskFormVisible}
        ></AddTaskForm>
      )}
      <AddTaskBtn
        taskFormVisible={taskFormVisible}
        setTaskFormVisible={setTaskFormVisible}
      ></AddTaskBtn>
    </React.Fragment>
  );
}

export default App;
