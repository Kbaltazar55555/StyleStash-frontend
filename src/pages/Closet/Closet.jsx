import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ItemCard from '../../components/ItemCard/ItemCard.jsx'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import * as tokenService from '../../services/tokenService.js';
import * as closetService from '../../services/closetService.js'

//styling
import './Closet.css'


const Closet = () => {
  const [closet, setCloset] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [closetItems, setClosetItems] = useState([])
  const navigate = useNavigate()
  const [showAddItemModal, setShowAddItemModal] = useState(false)

  const categories = ['Footwear', 'Clothing', 'Accessories', 'Outerwear']

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category)
  // };

  const handleCategorySelect = async (category) => {
    const lowerCaseCategory = category.toLowerCase();
    const closetId = tokenService.getClosetFromToken(); // Get the closetId
    try {
        const items = await closetService.getByCategory(closetId, lowerCaseCategory); // Pass both closetId and category
        console.log("Items fetched:", items);
        setClosetItems(items);
        setSelectedCategory(category);
    } catch (error) {
        console.error('Error fetching items by category', error);
    }
};



  useEffect(() => {
    const getCloset = async () => {
      const closetId = tokenService.getClosetFromToken();
      if (closetId) {
        try {
          const closetData = await closetService.getCloset(closetId)
          setCloset(closetData)
          console.log(closetData)
          setClosetItems(closetData.items)
        } catch (error) {
          console.error('Error fetching closet')
        }
      } else {
        console.log('No closet in token')
      }
    }
    getCloset()
  }, [])


  const navigateToItemDetails = (itemId) => {
    navigate(`/item-details/${itemId}`)
  };

  return (
    <div className='closet'>
      <h1>My Closet</h1>
      <button onClick={() => setShowAddItemModal(true)}>Add Item</button>
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
            {closetItems.map(item => (
              <ItemCard
                key={item._id}
                item={item}
                handleItemSelect={() => navigateToItemDetails(item._id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Closet