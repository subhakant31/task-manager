import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import SortByBtn from "./components/SortByBtn/SortByBtn";
import SubHeader from "./SubHeader/SubHeader";
import DeletePrompt from "./components/DeletePrompt/DeletePrompt";
function App() {
  const [taskData, setTaskData] = useState([]);
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [headerDate, setHeaderDate] = useState(new Date());
  const [deletePromptVisible, setDeletePromptVisible] = useState(false);
  const [itemIdToManipulate, setItemIdToManipulate] = useState();

  return (
    <React.Fragment>
      {console.log(taskData)}
      <Header headerDate={headerDate} setHeaderDate={setHeaderDate}></Header>
      <SubHeader
        taskData={taskData}
        taskFormVisible={taskFormVisible}
        setTaskFormVisible={setTaskFormVisible}
      ></SubHeader>
      {deletePromptVisible && (
        <DeletePrompt
          deletePromptVisible={deletePromptVisible}
          setDeletePromptVisible={setDeletePromptVisible}
        ></DeletePrompt>
      )}
      <TaskList
        itemIdToManipulate={itemIdToManipulate}
        setItemIdToManipulate={setItemIdToManipulate}
        deletePromptVisible={deletePromptVisible}
        setDeletePromptVisible={setDeletePromptVisible}
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
