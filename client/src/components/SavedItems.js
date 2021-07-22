import React, { useState } from 'react';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { REMOVE_ITEM } from '../utils/mutations';
import { removeItemId } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';

const SavedItems = () => {
    const [userData, setUserData] = useState({});
  
    // use this to determine if `useEffect()` hook needs to run again
    const userDataLength = Object.keys(userData).length;
    
    const { loading, data } = useQuery(GET_ME);
    const getUser = data?.user || [];
  
    const [removeItem, { error }] = useMutation(REMOVE_ITEM);
  
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDeleteItem= async (itemId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      
  
      try {
        const response = await removeItem(itemId, token);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const updatedUser = await response.json();
        setUserData(updatedUser);
        // upon success, remove book's id from localStorage
        removeItemId(itemId);
      } catch (err) {
        console.error(err);
      }
    };
  
    // if data isn't here yet, say so
    if (!userDataLength) {
      return <h2>LOADING...</h2>;
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

export default SavedItems