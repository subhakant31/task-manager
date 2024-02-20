import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import SortByBtn from "./components/SortByBtn/SortByBtn";
import SubHeader from "./SubHeader/SubHeader";

function App() {
  const [taskData, setTaskData] = useState([]);
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [headerDate, setHeaderDate] = useState(new Date());
  const [itemIdToManipulate, setItemIdToManipulate] = useState();

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      setTaskData(JSON.parse(storedData));
    }
  }, []);

  // Save data to local storage whenever taskData changes
  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);

  return (
    <React.Fragment>
      <Header headerDate={headerDate} setHeaderDate={setHeaderDate}></Header>
      <SubHeader
        taskData={taskData}
        taskFormVisible={taskFormVisible}
        setTaskFormVisible={setTaskFormVisible}
      ></SubHeader>

      <TaskList
        itemIdToManipulate={itemIdToManipulate}
        setItemIdToManipulate={setItemIdToManipulate}
        setTaskFormVisible={setTaskFormVisible}
        taskData={taskData}
        setTaskData={setTaskData}
      ></TaskList>

      {taskFormVisible && (
        <AddTaskForm
          itemIdToManipulate={itemIdToManipulate}
          setItemIdToManipulate={setItemIdToManipulate}
          taskData={taskData}
          setTaskData={setTaskData}
          taskFormVisible={taskFormVisible}
          setTaskFormVisible={setTaskFormVisible}
        ></AddTaskForm>
      )}
    </React.Fragment>
  );
}

export default App;
