import React from "react";

function CategoryFilter({categories, filter, selected}) {

  const categoryButton = categories.map((category)=> {
    const className = category === selected? "selected" : null;
    return ( 
      <button key={category} onClick={filter} className={className}>{category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
