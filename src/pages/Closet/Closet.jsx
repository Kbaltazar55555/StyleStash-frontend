import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard.jsx';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import * as tokenService from '../../services/tokenService.js';
import * as closetService from '../../services/closetService.js';
import AddItemModal from '../../components/AddItemModal/AddItemModal.jsx';

// Styling
import './Closet.css';

const Closet = () => {
  const [closet, setCloset] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [closetItems, setClosetItems] = useState([]);
  const navigate = useNavigate();
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const categories = ['Footwear', 'Clothing', 'Accessories', 'Outerwear'];

  const handleCategorySelect = async (category) => {
    const lowerCaseCategory = category.toLowerCase();
    const closetId = tokenService.getClosetFromToken();
    try {
      const items = await closetService.getByCategory(closetId, lowerCaseCategory);
      console.log('Items fetched:', items);
      setClosetItems(items);
      setSelectedCategory(category);
    } catch (error) {
      console.error('Error fetching items by category', error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await closetService.deleteItem(itemId);
      const closetId = tokenService.getClosetFromToken();
      const closetData = await closetService.getCloset(closetId);
      setCloset(closetData);
      setClosetItems(closetData.items);

      window.location.reload();
    } catch (error) {
      console.error('Error deleting item', error);
    }
  }

  useEffect(() => {
    const getCloset = async () => {
      const closetId = tokenService.getClosetFromToken();
      if (closetId) {
        try {
          const closetData = await closetService.getCloset(closetId);
          setCloset(closetData);
          console.log(closetData);
          setClosetItems(closetData.items);
        } catch (error) {
          console.error('Error fetching closet', error);
        }
      } else {
        console.log('No closet in token');
      }
    };
    getCloset();
  }, []);

  const navigateToItemDetails = (itemId) => {
    navigate(`/items/${itemId}`);
  };

  const handleAddItemButtonClick = () => {
    setShowAddItemModal(true);
  };

  return (
    <div className="closet">
      <h1>My Closet</h1>
      <button onClick={handleAddItemButtonClick}>Add Item</button>
      {selectedCategory === null ? (
        // Display category list when no category is selected
        <div className="category-list">
          {categories.map((category) => (
            <CategoryFilter
              key={category}
              category={category}
              handleCategorySelect={handleCategorySelect}
            />
          ))}
        </div>
      ) : (
        // Display items when a category is selected
        <div className="selected-category">
          <h2>{selectedCategory}</h2>
          <button onClick={() => setSelectedCategory(null)}>Back</button>
          <div className="closet-items">
            {closetItems.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                handleItemSelect={() => navigateToItemDetails(item._id)}
                handleDelete={() => deleteItem(item._id)}
              />
            ))}
          </div>
        </div>
      )}
      {/* Add the AddItemModal component */}
      {showAddItemModal && (
        <AddItemModal show={showAddItemModal} onClose={() => setShowAddItemModal(false)} />
      )}
    </div>
  );
};

export default Closet;
