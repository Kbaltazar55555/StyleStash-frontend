import React from 'react'


const CategoryFilter = ({ category, handleSelectCategory}) => {

  return (
    <button className='category-button' onClick={() => handleSelectCategory(category)}>
        {category}
    </button>
  )
}

export default CategoryFilter