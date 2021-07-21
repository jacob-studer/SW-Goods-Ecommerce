import React, { useState } from 'react';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const LoginPage = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    
    const [loginUser, { error }] = useMutation(LOGIN_USER);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        //LOGIN_USER mutation
        const { data } = await loginUser({
            variables: { ...userFormData },
          });
  
        Auth.login(data.loginUser.token);
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
  
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    };
  
//still need react form validation
    return (
        <div>
            <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    placeholder='Your email'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                >
                </input>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required  
                >
                </input>
                <button
                disabled={!(userFormData.email && userFormData.password)}
                type='submit'
                variant='success'>
                Submit
                </button>
            </form>
        </div>
    );
};

//what tells the page to redirect after login
  
  export default LoginPage;