import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import { closetItems } from '../../data/ClosetItems'


const Closet = () => {
const [selectedCategory, setSelectedCategory] = useState('null')
const [closetItems, setClosetItems] = useState([])
const navigate = useNavigate()

const categories = ['Footwear', 'Clothing', 'Accessories', 'Outerwear']

const handleCategorySelect = (category) => {
  setSelectedCategory(category)
};

const navigateToItemDetails = (itemId) => {
  navigate(`/item-details/${itemId}`)
};

  return (
   <div className='closet'>
    <h1>My Closet</h1>
    {selectedCategory === null ? (
      //Display category list when no category is selected
      <div className='category-list'>
        {categories.map(category => (
          <CategoryFilter 
          key={category} 
          category={category} handleCategorySelect={handleCategorySelect} />
        ))}
        </div>
    ) : (
      //Display items when a category is selected
      <div className='selected-category'>
        <h2>{selectedCategory}</h2>
        <button onClick={() => setSelectedCategory(null)}>Back</button>
        <div className='closet-items'>
          {closetItems
          .filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase()
          .map(item => (
            <ClosetItem 
            key={item.id} 
            item={item} 
            handleItemSelect={() => navigateToItemDetails(item.id)}/>
          )))}
        </div>
      </div>
    )}
    </div>
  )
}

export default Closet