import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'



import ItemDeets from '../../components/ItemDeets/ItemDeets.jsx'
import * as tokenService from '../../services/tokenService.js'
import * as itemService from '../../services/itemService.js'



const ItemDetails = () => {
  const {itemId} = useParams() 
  console.log(itemId)
  const [itemDetail, setItemDetail] = useState(null)
  const [editing, setEditing] = useState(false)

useEffect(() => {
  const getItemDetails = async () => {
    const itemData = await itemService.getItem(itemId)
    setItemDetail(itemData)
  } 
  getItemDetails()
}, [itemId])

return (
  <div className="item-details">
    {itemDetail ? (
      <>
        <h2>Item Details</h2>
        <div><strong>Category:</strong> {itemDetail.category}</div>
        <div><strong>Color:</strong> {itemDetail.color || 'N/A'}</div>
        <div><strong>Type:</strong> {itemDetail.type || 'N/A'}</div>
        <div><strong>Size:</strong> {itemDetail.size || 'N/A'}</div>
        <div><strong>Brand:</strong> {itemDetail.brand || 'N/A'}</div>
        <div><strong>Wear Count:</strong> {itemDetail.wearCount || 'N/A'}</div>
        <div><strong>Notes:</strong> {itemDetail.notes || 'N/A'}</div>
        {itemDetail.imageUrl && (
          <img src={itemDetail.imageUrl} alt="Item" style={{ maxWidth: '200px' }} />
        )}
      </>
    ) : (
      <div>Loading...</div>
    )}
  </div>
);

}

export default ItemDetails