import "./TaskList.scss";
import Task from "./Task/Task";
import "../AddTaskForm/AddTaskForm";
import ErrorText from "../ErrorText/ErrorText";
import SortByBtn from "../SortByBtn/SortByBtn";
function TaskList(props) {
  const taskData = props.taskData; //task data from parent component
  const setTaskData = props.setTaskData; //function to change task data
  const setTaskFormVisible = props.setTaskFormVisible; //function to enable/disable form modal
  const deletePromptVisible = props.deletePrompt;
  const setDeletePromptVisible = props.setDeletePromptVisible;

  const itemIdToManipulate = props.itemIdToManipulate;
  const setItemIdToManipulate = props.setItemIdToManipulate;
  
  return (
    <div className='task-list-container'>
      <div className='heading-sort-wrapper'>
        <span className='heading-sort-wrapper__heading'>My Tasks</span>
        {taskData.length !== 0 && (
          <SortByBtn taskData={taskData} setTaskData={setTaskData}></SortByBtn>
        )}
      </div>
      {taskData.length === 0 && (
        <ErrorText errorMessage='No task has been added'></ErrorText>
      )}
      <ul className='task-list-container__list'>
        {taskData.map((task) => {
          return (
            <Task
              itemIdToManipulate={itemIdToManipulate}
              setItemIdToManipulate={setItemIdToManipulate}
              deletePromptVisible={deletePromptVisible}
              setDeletePromptVisible={setDeletePromptVisible}
              taskData={taskData}
              setTaskData={setTaskData}
              setTaskFormVisible={setTaskFormVisible}
              key={task.id}
              task={task}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
