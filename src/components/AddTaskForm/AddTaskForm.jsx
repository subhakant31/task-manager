import { useState } from "react";
import "./AddTaskForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { checkDueDate } from "../../helperFunction";
import { v4 as uuidv4 } from "uuid"; // Import the v4 function from uuid
import { useEffect } from "react";

function AddTaskForm(props) {
  
  const {
    setTaskData,
    taskData,
    setTaskFormVisible,
    itemIdToManipulate,
    setItemIdToManipulate,
  } = props;

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
    const eventClassName = e.target.classList;
    if (eventClassName.contains("add-task-form-container__form__title")) {
      let taskTitle = e.target.value; //input title of the task
      setTaskTitle(taskTitle);
    } else if (
      eventClassName.contains("add-task-form-container__form__description")
    ) {
      let taskDescription = e.target.value;
      setTaskDescription(taskDescription);
    } else if (
      eventClassName.contains("add-task-form-container__form__due-date")
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

    if (
      e.target.classList.contains("add-task-form-container__form__add-task")
    ) {
      // Logic for adding a new task
      if (taskTitle !== "" && taskDueDate !== undefined) {
        closeForm();
        setItemIdToManipulate();
        setTaskData([...taskData, newTask]);
      }
    } else if (
      e.target.classList.contains("add-task-form-container__form__save-task")
    ) {
      // Logic for saving an existing task
      const itemId = e.target.dataset.id;

      if (itemId !== undefined) {
        // Find the index of the task to be updated
        const taskIndex = taskData.findIndex((task) => task.id === itemId);

        if (taskIndex !== -1) {
          // Create a copy of the taskData array
          const updatedTaskData = [...taskData];

          // Update the existing task in the copy
          updatedTaskData[taskIndex] = {
            id: itemId,
            title: taskTitle,
            category: taskCategory,
            description: taskDescription,
            dueDate: taskDueDate,
            isInDueDate: isInDueDate,
            isCompleted: false,
          };

          // Update the taskData state with the modified array
          setTaskData(updatedTaskData);

          // Close the form and reset itemIdToManipulate
          closeForm();
        }
      }
    }
  }

  function closeForm() {
    setItemIdToManipulate();
    setTaskFormVisible(false);
  }

  useEffect(() => {
    //logic to set the values to the respective form input fields
    if (itemIdToManipulate !== undefined) {
      const taskToUpdate = taskData.find(
        (task) => task.id === itemIdToManipulate
      );
      if (taskToUpdate) {
        setTaskTitle(taskToUpdate.title);
        setTaskDescription(taskToUpdate.description);
        setTaskDueDate(taskToUpdate.dueDate);
      }
    }
  }, [itemIdToManipulate, taskData]);

  return (
    <div className="task-add-form-modal">
      <div className="add-task-form-container">
        <h1 className="add-task-form-container__title">
          {itemIdToManipulate !== undefined ? "Edit task" : "Add a new task"}
        </h1>
        <button
          className="add-task-form-container__close-form-btn"
          onClick={closeForm}
          title="close form"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <form
          action=""
          className="add-task-form-container__form"
          data-id={itemIdToManipulate}
        >
          <label htmlFor="task-title">Task Title:</label>
          <input
            type="text"
            id="task-title"
            placeholder="Enter Title"
            className="add-task-form-container__form__title"
            onChange={handleChange}
            required={true}
            value={taskTitle}
          />

          <label htmlFor="task-description">Task Description:</label>
          <textarea
            id="task-description"
            placeholder="Enter Description"
            className="add-task-form-container__form__description"
            onChange={handleChange}
            value={taskDescription}
          />

          <label htmlFor="due-date">Due Date:</label>
          <input
            type="date"
            id="due-date"
            className="add-task-form-container__form__due-date"
            onChange={handleChange}
            required={true}
            value={taskDueDate}
          />

          {itemIdToManipulate !== undefined ? (
            <button
              data-id={itemIdToManipulate}
              className="add-task-btn add-task-form-container__form__save-task"
              onClick={handleSubmit}
              title="save task"
            >
              Save Task
            </button>
          ) : (
            <button
              className="add-task-btn add-task-form-container__form__add-task"
              onClick={handleSubmit}
              title="add task"
            >
              Add Task
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
