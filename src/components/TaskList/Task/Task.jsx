import "./Task.scss";
import { completeTask } from "../../../helperFunction";
import "../../AddTaskForm/AddTaskForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { getParentComp } from "../../../helperFunction";
function Task(props) {
  const task = props.task;
  const setTaskData = props.setTaskData;
  const taskData = props.taskData;
  const setTaskFormVisible = props.setTaskFormVisible;

  const deletePromptVisible = props.deletePrompt;
  const setDeletePromptVisible = props.setDeletePromptVisible;

  const itemIdToManipulate = props.itemIdToManipulate;
  const setItemIdToManipulate = props.setItemIdToManipulate;

  function clickHandler(e) {
    const completeTaskBtn = e.target.closest(".complete-task-btn");
    if (completeTaskBtn) {
      const itemId = completeTaskBtn.dataset.id;
      const updatedTaskList = completeTask(itemId, [...taskData]);
      setTaskData(updatedTaskList);
    }

    //logic to edit the selected task
    const editBtn = e.target.closest(".edit-task-btn");
    if (editBtn) {
      const itemId = editBtn.dataset.id;
      setItemIdToManipulate(itemId);
      setTaskFormVisible(true);
    }

    const deleteBtn = e.target.closest(".delete-task-btn");
    if (deleteBtn) {
      const itemId = deleteBtn.dataset.id;
      setDeletePromptVisible(true);
    }
    // if (e.target.classList.contains("delete-task-btn")) {
    //   setDeletePromptVisible(true);
    // }
  }

  return (
    <li className='task' data-id={task.id}>
      <div className='task__checkbox-info-wrapper'>
        <input
          type='checkbox'
          className='complete-task-btn'
          data-id={task.id}
          checked={task.isCompleted}
          onClick={clickHandler}
        ></input>
        <div className='task__contents'>
          <div className='task__contents__task-info-wrapper'>
            <div className='title-description-wrapper'>
              <span className='title-description-wrapper__task-title'>
                {task.title}
              </span>
              <p className='title-description-wrapper__task-description'>
                {task.description}
              </p>
            </div>
          </div>
          <div className='task__contents__action-btn-wrapper'>
            <button
              className='action-btn edit-task-btn'
              data-id={task.id}
              onClick={clickHandler}
              title='edit task'
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              className='action-btn delete-task-btn'
              data-id={task.id}
              onClick={clickHandler}
              title='delete task'
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
      <span className='task__due-date'>
        due Date: <br />
        {task.dueDate}
      </span>
    </li>
  );
}

export default Task;
