import { useState } from "react";
import "./AddTaskForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCross } from "@fortawesome/free-solid-svg-icons";
function AddTaskForm(props) {
  const setTaskData = props.setTaskData; //function to change the task data
  const taskData = props.taskData; //data of tasks state
  const setTaskFormVisible = props.setTaskFormVisible;
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState();
  const [isFormValid, setIsFormValid] = useState();
  const newTask = {
    title: taskTitle,
    description: taskDescription,
    dueDate: taskDueDate,
  };

  function handleChange(e) {
    if (e.target.classList.contains("add-task-form-container__form__title")) {
      setTaskTitle(e.target.value);
    } else if (
      e.target.classList.contains("add-task-form-container__form__description")
    ) {
      setTaskDescription(e.target.value);
    } else if (
      e.target.classList.contains("add-task-form-container__form__due-date")
    ) {
      setTaskDueDate(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTaskFormVisible(false);
    setTaskData([...taskData, newTask]);
  }

  function closeForm() {
    setTaskFormVisible(false);
  }

  return (
    <div className="add-task-form-container">
      {console.log(taskTitle, taskDescription)}
      <button
        className="add-task-form-container__close-form-btn"
        onClick={closeForm}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <form action="" className="add-task-form-container__form">
        <input
          type="text"
          placeholder="enter title"
          className="add-task-form-container__form__title"
          onChange={handleChange}
          required={true}
        />
        <input
          type="text"
          placeholder="enter description"
          className="add-task-form-container__form__description"
          onChange={handleChange}
        />
        <input
          type="date"
          className="add-task-form-container__form__due-date"
          onChange={handleChange}
          required={true}
        />
        <button
          className="add-task-btn add-task-form-container__form__add-task"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
