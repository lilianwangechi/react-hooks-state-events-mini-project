import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const allCategories = categories.filter(category => category !== "All").map(category=> <option key={category} value={category}>{category}</option>)

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"    
  });

  function handleFormChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
  }

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    onTaskFormSubmit(newTask)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormChange} value={formData.category}>
          {allCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;