import "./Task.scss";

function Task(props) {
  const task = props.task;
  return (
    <li className='task'>
      <h2 className='task__title'>{task.title}</h2>
      <h2 className='task__description'>{task.description}</h2>
    </li>
  );
}

export default Task;
