import { useState } from "react";
import "./AddTaskForm.scss";

function AddTaskForm(props) {
  const setTaskData = props.setTaskData; //function to change the task data
  const taskData = props.taskData; //data of tasks state

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const newTask = {
    title: taskTitle,
    description: taskDescription,
  };

  function handleChange(e) {
    if (e.target.classList.contains("add-task-form-container__form__title")) {
      setTaskTitle(e.target.value);
    } else if (
      e.target.classList.contains("add-task-form-container__form__description")
    ) {
      setTaskDescription(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const error = taskData.map((task) => {
      if (task.title === taskTitle && task.description === task.description) {
        console.log("task already present");
        return 0;
      }
    });
    !error && setTaskData([...taskData, newTask]);
  }

  return (
    <div className='add-task-form-container'>
      {console.log(taskTitle, taskDescription)}
      <form action='' className='add-task-form-container__form'>
        <input
          type='text'
          placeholder='enter title'
          className='add-task-form-container__form__title'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='enter description'
          className='add-task-form-container__form__description'
          onChange={handleChange}
        />
        <button
          className='add-task-btn add-task-form-container__form__add-task'
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
