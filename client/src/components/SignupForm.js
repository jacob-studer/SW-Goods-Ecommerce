import React, { useState } from 'react';
import { ADD_USER } from '../utils/mutations';
// import { createUser } from '../utils/API';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [createUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await createUser({
        variables: { ...userFormData }
      })

      // const { token, user } = await response.json();
      
      Auth.login(data.createUser.token);
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

  return (
      <div>
            <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    placeholder='Your username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                >
                </input>
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

export default SignupForm;
