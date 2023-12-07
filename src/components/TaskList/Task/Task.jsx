import "./Task.scss";
import { completeTask } from "../../../helperFunction";
function Task(props) {
  const task = props.task;
  const setTaskData = props.setTaskData;
  const taskData = props.taskData;
  const setTaskFormVisible = props.setTaskFormVisible;
  function clickHandler(e) {
    const itemId = e.target.dataset.id;

    const updatedTaskList = completeTask(itemId, [...taskData]);
    setTaskData(updatedTaskList);

    if (e.target.classList.contains("button__edit-task-btn")) {
      setTaskFormVisible(true);
    }
  }
  return (
    <li className='task' data-id={task.id}>
      <h2 className='task__title'>{task.title}</h2>
      <h2 className='task__description'>{task.description}</h2>
      <h2
        className={`task__due-date ${
          task.isInDueDate ? "in-due-date" : "past-due-date"
        }`}
      >
        due date: {task.dueDate}
      </h2>
      <button
        className='button__complete-task-btn'
        data-id={task.id}
        onClick={clickHandler}
      >
        finish task
      </button>
      <button
        className='button__edit-task-btn'
        data-id={task.id}
        onClick={clickHandler}
      >
        edit task
      </button>
      {task.isCompleted && <p>completed</p>}
      <h2 className='task__status'>
        status: {task.isInDueDate ? "In due Date" : "Past Due Date"}
      </h2>
    </li>
  );
}

export default Task;
