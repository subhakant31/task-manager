import React, { useState, useEffect } from "react";
import "./TaskList.scss";
import Task from "./Task/Task";
import SortByBtn from "../SortByBtn/SortByBtn";
import ErrorText from "../ErrorText/ErrorText";

function TaskList(props) {
  const {
    taskData,
    setTaskData,
    setTaskFormVisible,
    itemIdToManipulate,
    setItemIdToManipulate,
  } = props;

  // Load activeFilter and searchQuery from local storage when the component mounts
  const [activeFilter, setActiveFilter] = useState(() => {
    const storedFilter = localStorage.getItem("activeFilter");
    return storedFilter ? JSON.parse(storedFilter) : "all";
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    const storedSearchQuery = localStorage.getItem("searchQuery");
    return storedSearchQuery ? JSON.parse(storedSearchQuery) : "";
  });

  // Function to filter tasks based on the active filter and search query
  const filterTasks = () => {
    return taskData.filter((task) => {
      const titleMatch = task.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const descriptionMatch = task.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      switch (activeFilter) {
        case "completed":
          return task.isCompleted && titleMatch;
        case "overdue":
          return !task.isInDueDate && !task.isCompleted && titleMatch;
        case "dueSoon":
          return task.isInDueDate && !task.isCompleted && titleMatch;
        default:
          return titleMatch || descriptionMatch;
      }
    });
  };

  // Event handler for changing the active filter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Event handler for changing the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Save activeFilter and searchQuery to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("activeFilter", JSON.stringify(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
  }, [searchQuery]);

  const filteredTasks = filterTasks();

  return (
    <div className="task-list-container">
      <div className="heading-sort-wrapper">
        <span className="heading-sort-wrapper__heading">My Tasks</span>
        {taskData.length !== 0 && (
          <SortByBtn taskData={taskData} setTaskData={setTaskData}></SortByBtn>
        )}
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button
          onClick={() => handleFilterChange("all")}
          className={activeFilter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={activeFilter === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => handleFilterChange("overdue")}
          className={activeFilter === "overdue" ? "active" : ""}
        >
          Overdue
        </button>
        <button
          onClick={() => handleFilterChange("dueSoon")}
          className={activeFilter === "dueSoon" ? "active" : ""}
        >
          Due Soon
        </button>
      </div>

      {/* Search input */}
      <div className="search-input">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {filteredTasks.length === 0 && (
        <ErrorText errorMessage="No tasks"></ErrorText>
      )}

      <ul className="task-list-container__list">
        {filteredTasks.map((task) => (
          <Task
            itemIdToManipulate={itemIdToManipulate}
            setItemIdToManipulate={setItemIdToManipulate}
            taskData={taskData}
            setTaskData={setTaskData}
            setTaskFormVisible={setTaskFormVisible}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
