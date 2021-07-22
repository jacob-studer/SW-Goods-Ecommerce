import React, { useState, useEffect } from 'react';
import { SAVE_ITEM } from '../utils/mutations'
import { QUERY_ITEM } from '../utils/queries'
import Auth from '../utils/auth';
// import { saveItemIds, getSavedItemIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';

const ItemBig = () => {
  const { loading, data } = useQuery(QUERY_ITEM);
  const item = data?.item || [];

  const [saveItem, { error }] = useMutation(SAVE_ITEM);


//functionality to save the item
  
//try save function without state?
  const handleSaveItem = async (item) => {
    //select item id from database
    const itemToSave = item._id
   
    const token = Auth.loggedIn() ? Auth.getToken() : null;

     if (!token) {
       return false;
     }
 
     try {
       const { data } = saveItem({
         variables: { ...itemToSave },
         });
 
       // if book successfully saves to user's account, save book id to state
      //  setSavedBookIds([...savedBookIds, bookToSave.bookId]);
     } catch (err) {
       console.error(err);
     }
   };
    
  
    
    
    
  
    

  
    return (
            <div>
                <div key={item._id}>
                    {/* {item.image ? <img src={item.image} alt={`${item.itemname}`} */}
                  <div>
                      <h3>{item.itemname}</h3>
                      <p>{item.description}</p>
                      <button onClick={() => handleSaveItem(item._id)}>
                        Save Item to Cart
                      </button>
                  </div>
                </div>
            </div>
      );
  
}; 

export default ItemBig