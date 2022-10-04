import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [filterList, setFilterList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [classSelected, setclassSelected] = useState(false)

  
  function handleRemove(event){
     const newList = filterList.filter((task) => task.text !== event.target.dataset.task);
     setFilterList(newList)
  }

  function handleFilterChange(event) {
    setSelectedCategory(event.target.textContent);
  }

const tasksToDisplay = filterList.filter(
  (task)=> selectedCategory === "All" || task.category === selectedCategory
)

function handleSubmit (newTask) {
  setFilterList((filterList) => [...filterList, newTask])
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={handleFilterChange} selected={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={tasksToDisplay} onRemove={handleRemove}/>
    </div>
  );
}

export default App;
