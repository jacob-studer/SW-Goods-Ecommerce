import React, { useState, useEffect } from 'react';
import { SAVE_ITEM } from '../utils/mutations'
import Auth from '../utils/auth';
// import { saveItemIds, getSavedItemIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';

const ItemBig = () => {

//functionality to save the item

    // create state to hold saved ItemId values
    
    // method to access item via localstorage - want to use this?
    // or use the id for the item from the database
    const [savedItemIds, setSavedItemIds] = useState(getSavedItemIds());

    const [saveItem, { error }] = useMutation(SAVE_ITEM);

    // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
    return () => saveBookIds(savedBookIds);
    });

    // create method to search for books and set state on form submit
    const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
        return false;
    }
    

  
    return (
        <>
          
            <div>
                Viewing your saved items.
            </div>
            <h2>
              {userData.savedItems.length
                ? `Viewing ${userData.savedItems.length} saved ${userData.savedItems.length === 1 ? 'book' : 'books'}:`
                : 'You have no saved books!'}
            </h2>
            <div>
              {userData.savedItems.map((item) => {
                return (
                  //change ItemId to _id -same for delete handler?
                  <div key={item.ItemId} border='dark'>
                    {item.image ? <img src={item.image} alt={`The cover for ${item.itemname}`} variant='top' /> : null}
                    <div>
                      <h3>{item.itemname}</h3>
                      <p>{item.description}</p>
                      <button className='btn-block btn-danger' onClick={() => handleDeleteItem(item.itemId)}>
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
        </>
      );
    };
    

export default ItemBig