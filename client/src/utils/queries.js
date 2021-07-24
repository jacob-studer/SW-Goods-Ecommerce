import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
//     query user {
//         user {
//             _id
//             email
//             password
//         }
//     } 
//     `;
    
export const QUERY_ITEM = gql`
    query item {
        item {
           itemname
           description
           image
           category 
        }
    } 
`;

// id can be name of category

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;
