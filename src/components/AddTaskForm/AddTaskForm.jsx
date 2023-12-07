import { useEffect, useState } from "react";
import "./AddTaskForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { checkDueDate } from "../../helperFunction";
import { v4 as uuidv4 } from "uuid"; // Import the v4 function from uuid
function AddTaskForm(props) {
  const setTaskData = props.setTaskData; //function to change the task data
  const taskData = props.taskData; //data of tasks state
  const setTaskFormVisible = props.setTaskFormVisible;
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState();
  const [isInDueDate, setIsInDueDate] = useState();

  const newTask = {
    id: uuidv4(),

    title: taskTitle,
    category: taskCategory,
    description: taskDescription,
    dueDate: taskDueDate,
    isInDueDate: isInDueDate,
    isCompleted: false,
  };

  /* @function : handleChange
    @description : for storing changed values in respective states
    @params :  event object
    @returns : null
*/
  function handleChange(e) {
    if (e.target.classList.contains("add-task-form-container__form__title")) {
      let taskTitle = e.target.value; //input title of the task
      setTaskTitle(taskTitle);
    } else if (
      e.target.classList.contains("add-task-form-container__form__description")
    ) {
      let taskDescription = e.target.value;
      setTaskDescription(taskDescription);
    } else if (
      e.target.classList.contains("add-task-form-container__form__due-date")
    ) {
      let inputDate = e.target.value; //input date
      setTaskDueDate(inputDate);

      //condition to check whether the input due date is in due date or past due date
      if (checkDueDate(inputDate)) {
        setIsInDueDate(true);
      } else {
        setIsInDueDate(false);
      }
    }
  }

  /* @function : handleSubmit
    @description : for storing changed values in respective states
    @params :  event object
    @returns : null
*/
  function handleSubmit(e) {
    e.preventDefault();
    if (taskTitle !== "" || taskDueDate !== undefined) {
      closeForm();
      setTaskData([...taskData, newTask]);
    }
  }

  function closeForm() {
    setTaskFormVisible(false);
  }

  return (
    <div className='task-add-form-modal'>
      <div className='add-task-form-container'>
        <button
          className='add-task-form-container__close-form-btn'
          onClick={closeForm}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <form action='' className='add-task-form-container__form'>
          <input
            type='text'
            placeholder='enter title'
            className='add-task-form-container__form__title'
            onChange={handleChange}
            required={true}
          />
          <input
            type='text'
            placeholder='enter description'
            className='add-task-form-container__form__description'
            onChange={handleChange}
          />
          <input
            type='date'
            className='add-task-form-container__form__due-date'
            onChange={handleChange}
            required={true}
          />
          <button
            className='add-task-btn add-task-form-container__form__add-task'
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
