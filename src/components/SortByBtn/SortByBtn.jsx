import { sortData } from "../../helperFunction";
import "./SortByBtn.scss";

function SortByBtn(props) {
  const taskData = props.taskData; //all the task objects in an array
  const setTaskData = props.setTaskData;

  function handleClick(e) {
    const sortBy = e.target.value;

    //condition for sorting
    if (sortBy === "due-date-descending") {
      const sortedData = sortData([...taskData], sortBy);
      setTaskData(sortedData);
    } else if (sortBy === "due-date-ascending") {
      const sortedData = sortData([...taskData], sortBy);
      setTaskData(sortedData);
    } else if (sortBy === "status-completed") {
      const sortedData = sortData([...taskData], sortBy);
      setTaskData(sortedData);
    }
  }

  return (
    <select name='' id='' onChange={handleClick}>
      <option>Sort By</option>
      <option value='due-date-descending'>due date (descending)</option>
      <option value='due-date-ascending'>due date (ascending)</option>
      <option value='status-completed'>status (completed)</option>

      <option value='status'>status</option>
    </select>
  );
}

export default SortByBtn;
