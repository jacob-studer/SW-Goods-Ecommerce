import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            email
            string
        }
    }
`

export const ADD_USER = gql`
    mutation createUser($email: String!, $email: String!, $password: String!) {
        createUser(email: $email, email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveItem
        ($bookdata : itemInput!) {
        saveItem(itemdata: $itemdata) {
            _id
            username
            email 
            savedbooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            bookId
        }
    }
`