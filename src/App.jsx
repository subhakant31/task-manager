import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import AddTaskBtn from "./components/AddTaskBtn/AddTaskBtn";
import ErrorText from "./components/ErrorText/ErrorText";
function App() {
  const [taskData, setTaskData] = useState([]);
  const [taskFormVisible, setTaskFormVisible] = useState(false);

  return (
    <React.Fragment>
      <Header></Header>
      <TaskList taskData={taskData}></TaskList>
      {taskData.length === 0 && (
        <ErrorText errorMessage="No task has been added"></ErrorText>
      )}
      {taskFormVisible && (
        <AddTaskForm
          taskData={taskData}
          setTaskData={setTaskData}
          setTaskFormVisible={setTaskFormVisible}
        ></AddTaskForm>
      )}
      {console.log(taskData)}
      <AddTaskBtn
        // setTaskData={setTaskData}
        taskFormVisible={taskFormVisible}
        setTaskFormVisible={setTaskFormVisible}
      ></AddTaskBtn>
    </React.Fragment>
  );
}

export default App;
