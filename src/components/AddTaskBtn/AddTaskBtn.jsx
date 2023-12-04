import "./AddTaskBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function AddTaskBtn(props) {
  const handleClick = props.handleClick;

  return (
    <button className='add-task-btn' onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddTaskBtn;
