import React, { useState } from 'react';
import * as closetService from '../../services/closetService.js'
import * as tokenService from '../../services/tokenService.js'

const AddItemModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    category: '',
    color: '',
    type: '',
    size: '',
    brand: '',
    wearCount: '',
    notes: '',
    imageUrl: '',
  });

  // Define options for category and wearcount
  const categoryOptions = ['outerwear', 'footwear', 'clothing', 'accessories'];

  const wearCountOptions = ['often', 'rarely', 'special occasion'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const closetId = tokenService.getClosetFromToken()

    try {
      await closetService.addItem(formData, closetId); 
      onClose();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className={`modal ${show ? 'show' : 'hide'}`}>
      <div className='modal-content'>
        <h2>Add Item</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-data'>
            <label htmlFor='category'>Category:</label>
            <select
              name='category'
              id='category'
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value=''>Select a category</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className='form-data'>
            <label htmlFor='color'>Color:</label>
            <input
              type='text'
              name='color'
              id='color'
              value={formData.color}
              onChange={handleInputChange}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='type'>Type:</label>
            <input
              type='text'
              name='type'
              id='type'
              value={formData.type}
              onChange={handleInputChange}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='size'>Size:</label>
            <input
              type='text'
              name='size'
              id='size'
              value={formData.size}
              onChange={handleInputChange}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='brand'>Brand:</label>
            <input
              type='text'
              name='brand'
              id='brand'
              value={formData.brand}
              onChange={handleInputChange}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='wearCount'>Wear Count:</label>
            <select
              name='wearCount'
              id='wearCount'
              value={formData.wearCount}
              onChange={handleInputChange}
            >
              <option value=''>Select wear count</option>
              {wearCountOptions.map((wearCount) => (
                <option key={wearCount} value={wearCount}>
                  {wearCount}
                </option>
              ))}
            </select>
          </div>
          <div className='form-data'>
            <label htmlFor='notes'>Notes:</label>
            <textarea
              name='notes'
              id='notes'
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='imageUrl'>Image Url:</label>
            <textarea
              name='imageUrl'
              id='imageUrl'
              value={formData.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit'>Add Item</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddItemModal;
