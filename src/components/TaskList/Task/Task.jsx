import "./Task.scss";
import { completeTask } from "../../../helperFunction";
import "../../AddTaskForm/AddTaskForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getParentComp, deleteTask } from "../../../helperFunction";
import StatusPill from "../../StatusPill/StatusPill.jsx";
function Task(props) {
  const {
    task,
    setTaskData,
    taskData,
    setTaskFormVisible,
    setItemIdToManipulate,
  } = props;

  const [deleteValidationVisible, setDeleteValidationVisible] = useState(false);

  function clickHandler(e) {
    //logic to delete the task item upon confirmation
    const confirmDeleteBtn = e.target.closest(".yes-btn");
    const denyDeleteBtn = e.target.closest(".no-btn");
    if (confirmDeleteBtn) {
      const itemId = e.target.dataset.id;
      const updatedTask = deleteTask(itemId, [...taskData]);
      setTaskData(updatedTask);
    } else if (denyDeleteBtn) {
      setDeleteValidationVisible(false);
    }

    //logic to mark the task as complete
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

    //logic for deleting a task
    const deleteBtn = e.target.closest(".delete-task-btn");
    if (deleteBtn) {
      setDeleteValidationVisible(true);
    }
  }

  return (
    <>
      <li className="task" data-id={task.id} onClick={clickHandler}>
        <div className="task__checkbox-info-wrapper">
          <input
            type="checkbox"
            className="complete-task-btn"
            data-id={task.id}
            checked={task.isCompleted}
          ></input>
          <div className="task__contents">
            <div className="task__contents__task-info-wrapper">
              <div className="title-description-wrapper">
                <span className="title-description-wrapper__task-title">
                  {task.title}
                </span>
                <p className="title-description-wrapper__task-description">
                  {task.description}
                </p>
              </div>
            </div>
            <div className="task__contents__action-btn-wrapper">
              <button
                className="action-btn edit-task-btn"
                data-id={task.id}
                title="edit task"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                className="action-btn delete-task-btn"
                data-id={task.id}
                title="delete task"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
        <div className="task__due-date">
          <div className="due-date">
            <span className="due-date__title">Due Date</span>
            <span className="due-date__date">{task.dueDate}</span>
          </div>
          <StatusPill
            statusText={task.isInDueDate ? "in due date" : "past due date"}
          ></StatusPill>
          <StatusPill
            statusText={task.isCompleted ? "completed" : "incomplete"}
          ></StatusPill>
        </div>
      </li>
      {deleteValidationVisible && (
        <div className="delete-validation-wrapper">
          <div className="delete-validation" onClick={clickHandler}>
            <h2>Are you sure you want to delete this task ?</h2>
            <div className="delete-validation__btn-wrapper">
              <button className="yes-btn validation-btn" data-id={task.id}>
                Yes
              </button>
              <button className="no-btn validation-btn" data-id={task.id}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
